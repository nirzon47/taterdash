import { userModel } from '../../models/users'
import validator from 'validator'

export const registerUser = async (req: any, res: any) => {
	try {
		const { firstName, lastName, email, password, role } = req.body

		if (validator.isEmail(email)) {
			return res.status(400).json({
				success: false,
				message: 'Invalid email address',
			})
		}

		const user = await userModel.create({
			firstName,
			lastName,
			email,
			password,
			role,
		})

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
