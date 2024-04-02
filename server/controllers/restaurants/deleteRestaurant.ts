import { restaurantModel } from '../../models/restaurants'

// Controller to delete restaurant
export const deleteRestaurant = async (req: any, res: any) => {
	try {
		const { restaurant } = req

		// Delete the restaurant
		await restaurantModel.findByIdAndDelete(restaurant._id)

		// Upon success, send a success message
		res.status(200).json({
			success: true,
			message: 'Restaurant deleted successfully',
		})
	} catch (error: Error | any) {
		res.status(500).json({
			success: false,
			message: error.message || 'Deleting restaurant failed',
		})
	}
}
