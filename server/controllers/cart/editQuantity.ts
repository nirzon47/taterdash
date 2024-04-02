import { cartModel } from '../../models/cart'

// Controller to change the quantity of an item in cart
export const editQuantity = async (req: any, res: any) => {
	try {
		const { itemId, quantity } = req.body
		const { user } = req

		// If correct fields are not provided
		if (!itemId || !quantity || quantity < 1) {
			return res.status(400).json({
				success: false,
				message: 'Provide all required fields',
			})
		}

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

		// Update the quantity of the item
		const newCart = await cartModel.findOneAndUpdate(
			{ user: user._id, 'items.item': itemId },
			{ $set: { 'items.$.quantity': quantity } },
			{ new: true }
		)

		// Upon success, send the cart
		return res.status(200).json({
			success: true,
			message: 'Quantity updated successfully',
			cart: newCart,
		})
	} catch (error: Error | any) {
		res.status(500).json({
			success: false,
			message: error.message || 'Editing quantity failed',
		})
	}
}
