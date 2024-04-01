import { restaurantModel } from '../../models/restaurants'

// Controller for  editing Image
export const editImage = async (req: any, res: any) => {
	try {
		const { restaurant } = req

		const imagePath = req.file.path

		// If image is not provided
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

		// Upon success, send the updated restaurant
		res.status(200).json({
			success: true,
			message: 'Image updated successfully',
			data: updatedRestaurant,
		})
	} catch (error: Error | any) {
		res.status(500).json({
			success: false,
			message: error.message || 'Error updating image',
		})
	}
}
