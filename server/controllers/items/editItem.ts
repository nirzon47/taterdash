import { itemModel } from '../../models/restaurants'

export const editItem = async (req: any, res: any) => {
	try {
		let { name, price } = req.body
		const { itemId } = req.params

		// If itemId is not provided
		if (!itemId) {
			return res.status(400).json({
				success: false,
				message: 'Item ID is required',
			})
		}

		const item = await itemModel.findById(itemId)

		// If name or price are not provided, use the existing values
		if (!name) {
			name = item?.name
		}
		if (!price) {
			price = item?.price
		}

		// Update the item
		const updatedItem = await itemModel.findByIdAndUpdate(
			itemId,
			{ name, price },
			{ new: true }
		)

		// Upon success, send the item
		res.status(200).json({
			success: true,
			message: 'Item updated successfully',
			data: updatedItem,
		})
	} catch (error: Error | any) {
		res.status(500).json({
			success: false,
			message: error.message || 'Editing item failed',
		})
	}
}
