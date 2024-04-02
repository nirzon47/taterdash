import { cartModel } from '../../models/cart'

// Controller to get cart
export const getCart = async (req: any, res: any) => {
	try {
		const { user } = req

		const cart = await cartModel
			.findOne({ user: user._id })
			.populate('items.item')

		return res.status(200).json({
			success: true,
			cart,
		})
	} catch (error: Error | any) {
		return res.status(500).json({
			success: false,
			message: error.message || 'Getting cart failed',
		})
	}
}
