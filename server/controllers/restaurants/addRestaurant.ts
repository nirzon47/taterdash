import { restaurantModel } from '../../models/restaurants'

export const addRestaurant = async (req: any, res: any) => {
	try {
		const { name, cuisine } = req.body

		const cuisineArray = cuisine.split(',')

		// If any field is missing
		if (!name || !cuisine) {
			return res
				.status(400)
				.json({ success: false, message: 'Name and cuisine are required' })
		}

		const restaurantsInDB = await restaurantModel.find()

		// If restaurant already exists
		const existingRestaurant = restaurantsInDB.find(
			(restaurant: any) => restaurant.name === name
		)

		if (existingRestaurant) {
			return res.status(400).json({
				success: false,
				message: 'Restaurant already exists',
			})
		}

		// Add restaurant to database
		const restaurant = await restaurantModel.create({
			name,
			cuisine: cuisineArray.map((item: any) => item.trim()),
		})

		// Upon success, send the restaurant
		res.status(200).json({
			success: true,
			message: 'Restaurant added successfully',
			data: restaurant,
		})
	} catch (error: Error | any) {
		res.status(500).json({
			success: false,
			message: error.message || 'Error adding restaurant',
		})
	}
}
