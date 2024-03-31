import { userModel } from '../../models/users'

// Controller for logging out user
export const logoutUser = async (req: any, res: any) => {
	try {
		console.log(req.user)

		const user = req.user
		const token = req.headers.authorization?.split(' ')[1]

		await userModel.findOneAndUpdate(
			{ _id: user._id },
			{ $pull: { tokens: token } },
			{ new: true }
		)

		res.status(200).json({
			success: true,
			message: 'User logged out successfully',
		})
	} catch (error) {
		res.status(500).json({
			success: false,
			message: 'Error logging out user',
		})
	}
}
