import { restaurantModel } from '../../models/restaurants'

// Controller for getting all restaurants
export const getRestaurants = async (req: any, res: any) => {
	try {
		const restaurants = await restaurantModel.find()

		res.status(200).json({
			success: true,
			message: 'Restaurants fetched successfully',
			data: restaurants,
		})
	} catch (error) {
		res.status(500).json({
			success: false,
			message: 'Error getting restaurants',
		})
	}
}
