import { restaurantModel } from '../../models/restaurants'

// Controller for adding restaurant image
export const editRestaurantImage = async (req: any, res: any) => {
	try {
		const { restaurant } = req
		const imagePath = req.file.path

		// Check if there is an image
		if (!imagePath) {
			return res
				.status(400)
				.json({ success: false, message: 'Image is required' })
		}

		// Update image
		const updatedRestaurant = await restaurantModel.findOneAndUpdate(
			{ _id: restaurant._id },
			{ imagePath },
			{ new: true }
		)

		// Upon success, send the restaurant
		res.status(200).json({
			success: true,
			restaurant: updatedRestaurant,
		})
	} catch (error: Error | any) {
		res.status(500).json({
			success: false,
			message: error.message || 'Error editing restaurant image',
		})
	}
}
