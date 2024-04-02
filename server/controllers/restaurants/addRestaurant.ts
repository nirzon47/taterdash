import { restaurantModel } from '../../models/restaurants'

// Controller for adding restaurant
export const addRestaurant = async (req: any, res: any) => {
	try {
		let { name, cuisine } = req.body

		// Split the cuisine string into an array
		cuisine = cuisine.split(',').map((cuisine: string) => cuisine.trim())

		// Check if the restaurant already exists
		const restaurants = await restaurantModel.find()
		if (
			restaurants &&
			restaurants.find((restaurant: any) => restaurant.name === name)
		) {
			return res.status(400).json({
				success: false,
				message: 'Restaurant already exists',
			})
		}

		// Create a new restaurant
		const newRestaurant = await restaurantModel.create({
			name,
			cuisine: cuisine.map((cuisine: string) => cuisine),
		})

		// Upon success, send the restaurant
		res.status(201).json({
			success: true,
			message: 'Restaurant added successfully',
			restaurant: newRestaurant,
		})
	} catch (error: any) {
		res.status(500).json({
			success: false,
			message: error.message || 'Error adding restaurant',
		})
	}
}
