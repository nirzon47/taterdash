import { userModel } from '../../models/users'

// Controller for adding address
export const addAddress = async (req: any, res: any) => {
	try {
		const user = req.user

		const { street, city, state, zip, country } = req.body

		// If any field is missing
		if (!street || !city || !state || !zip || !country) {
			return res
				.status(400)
				.json({ success: false, message: 'All fields are required' })
		}

		// Add address to user
		const updatedUser = await userModel.findOneAndUpdate(
			user._id,
			{
				$set: {
					address: { street, city, state, zip, country },
				},
			},
			{ password: 0, new: true }
		)

		// Upon success, send the updated user
		res.status(200).json({
			success: true,
			message: 'Address added successfully',
			data: updatedUser?.address,
		})
	} catch (error: Error | any) {
		res.status(500).json({
			success: false,
			message: error.message || 'Something went wrong',
		})
	}
}
