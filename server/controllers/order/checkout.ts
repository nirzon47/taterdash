import { nanoid } from 'nanoid'
import { cartModel } from '../../models/cart'
import { userModel } from '../../models/users'
import Razorpay from 'razorpay'
import { orderModel } from '../../models/order'

const razorpay = new Razorpay({
	key_id: process.env.RAZORPAY_KEY_ID as string,
	key_secret: process.env.RAZORPAY_KEY_SECRET,
})

// Controller for checking out
export const checkout = async (req: any, res: any) => {
	try {
		const { user } = req

		// Get cart
		const cart = await cartModel
			.findOne({ user: user._id })
			.populate('items.item')

		// If cart does not exist
		if (!cart) {
			return res.status(400).json({
				success: false,
				message: 'Cart not found',
			})
		}

		const { paymentMethod, coupon, newAddress } = req.body

		// Get user address
		const userAddress = await userModel
			.findById(user._id)
			.select('address -_id')

		// If user does not have address or there is no new address
		if (
			userAddress &&
			JSON.stringify(userAddress.address) === '{}' &&
			!newAddress
		) {
			return res.status(400).json({
				success: false,
				message: 'Add address to your account first or provide new address',
			})
		}

		// If cart is empty
		if (cart && cart.items.length === 0) {
			return res.status(400).json({
				success: false,
				message: 'Cart is empty',
			})
		}

		// Calculate total
		const total = cart?.items.reduce((acc: number, item: any) => {
			return acc + item.item.price * item.quantity
		}, 0)

		// TODO: Uncomment after coupon module is implemented
		// if (coupon) {
		// 	// Gets the coupon from the database
		// 	const couponData = await couponModel
		// 		.findOne({ code: coupon })
		// 		.populate({
		// 			path: 'coupons',
		// 		})

		// 	const discount = couponData.discount
		// 	const discountAmount = (total * discount) / 100

		// 	total = total - Math.min(discountAmount, couponData.limit)
		// }

		// Create order
		const orderObject = {
			items: cart?.items.map((item: any) => ({
				item: item.item._id,
				quantity: item.quantity,
			})),
			total,
			address: newAddress || userAddress?.address,
			status: 'pending',
			paymentId: '',
		}

		// If payment method is cod
		if (paymentMethod === 'cod') {
			orderObject.status = 'completed'
			orderObject.paymentId = 'cod'

			await cartModel.deleteOne({ user: user._id })

			// If order does not exist, create it
			const order = await orderModel.findOne({ user: user._id })
			if (!order) {
				await orderModel.create({
					user: user._id,
					orders: [],
				})
			}

			// Pushes order
			const updatedOrder = await orderModel.findOneAndUpdate(
				{ user: user._id },
				{
					$push: { orders: orderObject },
				}
			)

			return res.status(200).json({
				success: true,
				message: 'Order placed successfully',
				order: orderObject,
				orderId: updatedOrder?._id,
			})
		}

		// If payment method is online
		const razorpayOptions = {
			amount: (total as number) * 100,
			currency: 'INR',
			receipt: nanoid(),
		}

		// Create razorpay order
		let razorpayOrder
		try {
			razorpayOrder = await razorpay.orders.create(razorpayOptions)
		} catch (error: Error | any) {
			return res.status(500).json({
				success: false,
				message: error.message || 'Razorpay checkout failed',
			})
		}

		// Update order
		orderObject.paymentId = razorpayOrder.id

		// Save order and delete cart
		await cartModel.deleteOne({ user: user._id })

		// If order does not exist, create it
		const order = await orderModel.findOne({ user: user._id })
		if (!order) {
			await orderModel.create({
				user: user._id,
				orders: [],
			})
		}

		const updatedOrder = await orderModel.findOneAndUpdate(
			{ user: user._id },
			{
				$push: { orders: orderObject },
			}
		)

		res.status(200).json({
			success: true,
			message: 'Order placed successfully',
			order: orderObject,
			orderId: updatedOrder?._id,
		})
	} catch (error: Error | any) {
		res.status(500).json({
			success: false,
			message: error.message || 'Checkout failed',
		})
	}
}
