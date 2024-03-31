import { userModel } from '../../models/users'

// Controller for updating address
export const updateAddress = async (req: any, res: any) => {
	try {
		const user = req.user

		let { street, city, state, zip, country } = req.body
		const userDB = await userModel.findOne(user._id)

		// If user does not have address
		if (userDB && !userDB.address) {
			return res.status(400).json({
				success: false,
				message: 'Add address to your account first',
			})
		}

		// If any field is missing
		if (!street) {
			street = userDB?.address?.street
		}
		if (!city) {
			city = userDB?.address?.city
		}
		if (!state) {
			state = userDB?.address?.state
		}
		if (!zip) {
			zip = userDB?.address?.zip
		}
		if (!country) {
			country = userDB?.address?.country
		}

		// Update address
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
			message: 'Address updated successfully',
			data: updatedUser?.address,
		})
	} catch (error) {
		res.status(500).json({
			success: false,
			message: 'Error updating address',
		})
	}
}
