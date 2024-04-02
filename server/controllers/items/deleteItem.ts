import { itemModel } from '../../models/restaurants'

// Controller for deleting items
export const deleteItem = async (req: any, res: any) => {
	try {
		const { itemId } = req.params

		await itemModel.findByIdAndDelete(itemId)

		res.status(200).json({
			success: true,
			message: 'Item deleted successfully',
		})
	} catch (error: Error | any) {
		res.status(500).json({
			success: false,
			message: error.message || 'Deleting item failed',
		})
	}
}
