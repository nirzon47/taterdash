import { orderModel } from '../../models/order'

export const orderHistory = async (req: any, res: any) => {
	try {
		const { user } = req

		const orders = await orderModel
			.find({ user: user._id })
			.populate('orders.items.item')

		// if (orders.length === 0) {
		// 	return res.status(200).json({
		// 		success: true,
		// 		orders: [],
		// 	})
		// }

		return res.status(200).json({
			success: true,
			orders,
		})
	} catch (error: Error | any) {
		return res.status(500).json({
			success: false,
			message: error.message || 'Getting order history failed',
		})
	}
}
