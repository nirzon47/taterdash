import { restaurantModel } from '../../models/restaurants'

// Controller for getting restaurants
export const getRestaurants = async (req: any, res: any) => {
	try {
		// Get all the restaurants
		const restaurants = await restaurantModel
			.find()
			.select('-__v -categories')

		// Upon success, send the restaurants
		res.status(200).json({
			success: true,
			restaurants,
		})
	} catch (error: Error | any) {}
}
