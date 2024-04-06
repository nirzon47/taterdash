import { restaurantModel } from '../../models/restaurants'

// Controller for editing restaurant
export const editRestaurant = async (req: any, res: any) => {
	try {
		let { name, cuisine, rating, deliveryTimeInMinutes } = req.body

		const { restaurant } = req

		// If name or cuisine is not provided, use the existing values
		if (!name) {
			name = restaurant.name
		}
		if (!cuisine) {
			cuisine = restaurant.cuisine
			cuisine = cuisine.join(',')
		}
		if (!rating) {
			rating = restaurant.rating
		}
		if (!deliveryTimeInMinutes) {
			deliveryTimeInMinutes = restaurant.deliveryTimeInMinutes
		}

		// Split the cuisine string into an array
		cuisine = cuisine.split(',').map((cuisine: string) => cuisine.trim())

		// Update the restaurant
		const updatedRestaurant = await restaurantModel.findOneAndUpdate(
			{ _id: restaurant._id },
			{
				name,
				cuisine: cuisine.map((cuisine: string) => cuisine),
				rating,
				deliveryTimeInMinutes,
			},
			{ new: true }
		)

		// Upon success, send the restaurant
		res.status(200).json({
			success: true,
			message: 'Restaurant updated successfully',
			restaurant: updatedRestaurant,
		})
	} catch (error: Error | any) {
		res.status(500).json({
			success: false,
			message: error.message || 'Editing restaurant failed',
		})
	}
}
