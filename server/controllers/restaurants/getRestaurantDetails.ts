import { restaurantModel } from '../../models/restaurants'

// Controller to get Restaurant Details
export const getRestaurantDetails = async (req: any, res: any) => {
	try {
		const { restaurantId } = req.params

		const restaurant = await restaurantModel
			.findOne({ _id: restaurantId })
			.populate('categories categories.items')

		if (!restaurant) {
			return res.status(404).json({
				success: false,
				message: 'Restaurant not found',
			})
		}

		// TODO: Check if the population works

		// Upon success, send the restaurant
		res.status(200).json({
			success: true,
			restaurant,
		})
	} catch (error: Error | any) {
		res.status(500).json({
			success: false,
			message: error.message || 'Error getting restaurant details',
		})
	}
}
