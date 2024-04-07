import jwt from 'jsonwebtoken'
import { userModel } from '../models/users'

// Verifies tokes, refreshes tokens, and checks permissions
const authVerification =
	([roles]: any) =>
	async (req: any, res: any, _next: any) => {
		try {
			// Get token from header
			const token = req.headers.authorization?.split(' ')[1]

			// If token does not exist
			if (!token) {
				return res.status(401).json({
					success: false,
					message: 'No token. Unauthorized',
				})
			}

			// Genuineness check
			const user = jwt.decode(token) as any

			let userFromDB = await userModel.findById(user._id)
			if (userFromDB && !userFromDB.tokens.includes(token)) {
				return res.status(401).json({
					success: false,
					message: 'Token verification failed, try signing in again',
				})
			}

			// Permission check

			const isAuthorized = roles.includes(userFromDB?.role)

			if (!isAuthorized) {
				return res.status(401).json({
					success: false,
					message: 'Insufficient permissions',
				})
			}

			// Refresh tokens
			const refreshedToken = []
			if (userFromDB?.tokens) {
				for (const tkn of userFromDB.tokens) {
					try {
						jwt.verify(tkn, process.env.JWT_SECRET as string)
						refreshedToken.push(tkn)
					} catch (error) {
						continue
					}
				}
			}
			userFromDB = await userModel
				.findOneAndUpdate(
					{ _id: user._id },
					{ tokens: refreshedToken },
					{ new: true }
				)
				.select('-__v -password -address -tokens')

			// Set user in request
			req.user = userFromDB

			_next()
		} catch (error) {
			res.status(500).json({
				success: false,
				message: 'Token verification failed, try signing in again',
			})
		}
	}

export default authVerification
