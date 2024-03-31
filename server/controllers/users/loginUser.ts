import dayjs from 'dayjs'
import { userModel } from '../../models/users'
import jwt from 'jsonwebtoken'

// Controller for logging in user
export const loginUser = async (req: any, res: any) => {
	try {
		const { email, password } = req.body

		const user = await userModel.findOne({ email })

		// If user does not exist
		if (!user) {
			return res.status(404).json({
				success: false,
				message: 'User not found',
			})
		}

		// If password does not match
		const passwordMatch = await Bun.password.verify(password, user.password)
		if (!passwordMatch) {
			return res.status(401).json({
				success: false,
				message: 'Invalid credentials',
			})
		}

		// Options for JWT
		const jwtPayload = {
			_id: user._id,
			firstName: user.firstName,
			lastName: user.lastName,
			email: user.email,
			role: user.role,
			exp: dayjs().add(1, 'hour').unix(), // 1 hour
		}

		// Generate JWT
		const token = jwt.sign(jwtPayload, process.env.JWT_SECRET as string)

		// Add token to user
		await userModel.findByIdAndUpdate(user._id, {
			$push: { tokens: token },
		})

		// Upon success, send the token
		res.status(200).json({
			success: true,
			message: 'User logged in successfully',
			token,
		})
	} catch (error: Error | any) {
		res.status(500).json({
			success: false,
			error: error.message || 'Something went wrong',
		})
	}
}
