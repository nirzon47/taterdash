import { cartModel } from '../../models/cart'

// Controller to add to cart
export const addToCart = async (req: any, res: any) => {
	try {
		const { itemId, quantity, restaurantId } = req.body
		const { user } = req

		// If itemId is not provided
		if (!itemId || !restaurantId || !quantity || quantity < 1) {
			return res.status(400).json({
				success: false,
				message: 'Provide all required fields',
			})
		}

		const cart = await cartModel.findOne({ user: user._id })

		// If cart does not exist
		if (!cart) {
			const newCart = await cartModel.create({
				user: user._id,
				restaurant: restaurantId,
				items: [{ item: itemId, quantity }],
			})

			return res.status(200).json({
				success: true,
				message: 'Item added to cart successfully',
				cart: newCart,
			})
		}

		// If restaurantId is different from the one in cart
		if (cart?.restaurant?.toString() !== restaurantId) {
			return res.status(400).json({
				success: false,
				message: 'Cannot add item to cart from different restaurant',
			})
		}

		// If item already exists in cart
		if (cart?.items?.find((item: any) => item?.item?.toString() === itemId)) {
			return res.status(400).json({
				success: false,
				message: 'Item already exists in cart',
			})
		}

		// Add item to cart
		const newCart = await cartModel.findOneAndUpdate(
			{ user: user._id },
			{ $push: { items: itemId } },
			{ new: true }
		)

		// Upon success, send the cart
		res.status(200).json({
			success: true,
			message: 'Item added to cart successfully',
			cart,
		})
	} catch (error: Error | any) {
		res.status(500).json({
			success: false,
			message: error.message || 'Error adding to cart',
		})
	}
}
