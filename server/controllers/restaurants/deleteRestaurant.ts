import { restaurantModel } from '../../models/restaurants'

export const deleteRestaurant = async (req: any, res: any) => {
	try {
		const { restaurant } = req

		await restaurantModel.findByIdAndDelete(restaurant._id)

		res.status(200).json({
			success: true,
			message: 'Restaurant deleted successfully',
		})
	} catch (error) {
		res.status(500).json({
			success: false,
			message: 'Error deleting restaurant',
		})
	}
}
