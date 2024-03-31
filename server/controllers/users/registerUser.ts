import { userModel } from '../../models/users'
import validator from 'validator'

// Controller for registering user
export const registerUser = async (req: any, res: any) => {
	try {
		const { firstName, lastName, email, password, role } = req.body

		// If email is not valid
		if (!validator.isEmail(email)) {
			return res.status(400).json({
				success: false,
				message: 'Invalid email address',
			})
		}

		if (!validator.isLength(password, { min: 8 })) {
			return res.status(400).json({
				success: false,
				message: 'Password is not strong enough',
			})
		}

		// Adding user to database
		const user = await userModel.create({
			firstName,
			lastName,
			email,
			password,
			role,
		})

		// Upon success, send the user
		res.status(201).json({
			success: true,
			message: 'User created successfully',
			user,
		})
	} catch (error: Error | any) {
		res.status(500).json({
			success: false,
			error: error.message || 'Something went wrong',
		})
	}
}
