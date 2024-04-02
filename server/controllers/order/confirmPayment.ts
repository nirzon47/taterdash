import { orderModel } from '../../models/order'

// Controller for confirming payment
export const confirmPayment = async (req: any, res: any) => {
	try {
		// Gets the order ID from the request body
		const { orderID } = req.body

		// Finds the appropriate order and updates its payment status
		const updatedOrder = await orderModel.findOneAndUpdate(
			{ _id: orderID, 'orders.$.status': 'pending' },
			{ $set: { 'orders.$.status': 'paid' } }
		)

		// Upon success, send a success response
		res.json({
			success: true,
			message: 'Payment successful',
			order: updatedOrder,
		})
	} catch (error: any) {
		// Upon failure, send an error response
		res.status(500).json({
			success: false,
			message: error.message || 'Payment failed',
		})
	}
}
