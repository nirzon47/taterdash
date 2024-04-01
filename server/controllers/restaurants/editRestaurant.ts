import { restaurantModel } from '../../models/restaurants'

export const editRestaurant = async (req: any, res: any) => {
	try {
		const { restaurant } = req

		let { name, cuisine } = req.body

		if (!name) {
			name = restaurant.name
		}

		let cuisineArray
		if (!cuisine) {
			cuisineArray = restaurant.cuisine
		} else {
			cuisineArray = cuisine.split(',')
		}

		const updatedRestaurant = await restaurantModel.findByIdAndUpdate(
			restaurant._id,
			{
				name,
				cuisine: cuisineArray.map((item: any) => item.trim()),
			},
			{ new: true }
		)

		res.status(200).json({
			success: true,
			message: 'Restaurant updated successfully',
			data: updatedRestaurant,
		})
	} catch (error: Error | any) {
		res.status(500).json({
			success: false,
			message: error.message || 'Error editing restaurant',
		})
	}
}
