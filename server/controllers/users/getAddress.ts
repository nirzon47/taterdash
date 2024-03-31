import { userModel } from '../../models/users'

// Controller for updating address
export const getAddress = async (req: any, res: any) => {
	try {
		const user = req.user

		const userDB = await userModel.findOne(user._id)

		// If user does not have address
		if (userDB && !userDB.address) {
			return res.status(400).json({
				success: false,
				message: 'Add address to your account first',
			})
		}

		// Upon success, send the updated user
		res.status(200).json({
			success: true,
			message: 'Address fetched successfully',
			data: userDB?.address,
		})
	} catch (error) {
		res.status(500).json({
			success: false,
			message: 'Error getting address',
		})
	}
}
