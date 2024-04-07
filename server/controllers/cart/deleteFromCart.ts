import { cartModel } from '../../models/cart'

// Controller for deleting item from cart
export const deleteFromCart = async (req: any, res: any) => {
	try {
		const { itemId } = req.body
		const { user } = req

		// If itemId is not provided
		if (!itemId) {
			return res.status(400).json({
				success: false,
				message: 'Provide all required fields',
			})
		}

		const cart = await cartModel.findOne({ user: user._id })

		// If cart does not exist
		if (!cart) {
			return res.status(400).json({
				success: false,
				message: 'Cart not found',
			})
		}

		// Delete the item from cart
		const newCart = await cartModel.findOneAndUpdate(
			{ user: user._id, 'items.item': itemId },
			{ $pull: { items: { item: itemId } } },
			{ new: true }
		)

		if (newCart?.items.length === 0) {
			await cartModel.findOneAndDelete({ user: user._id })
		}

		// Upon success, send the cart
		return res.status(200).json({
			success: true,
			message: 'Item deleted from cart successfully',
			cart: newCart,
		})
	} catch (error: Error | any) {
		res.status(500).json({
			success: false,
			message: error.message || 'Deleting item from cart failed',
		})
	}
}
