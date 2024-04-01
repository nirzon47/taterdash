import { Router } from 'express'
import userController from '../controllers/users/users'
import authVerification from '../middlewares/authVerification'

const router = Router()

// Register User
router.post('/register', userController.registerUser)

// Login User
router.post('/login', userController.loginUser)

// Logout User
router.post(
	'/logout',
	authVerification(['admin', 'user']),
	userController.logoutUser
)

// Add Address
router.post(
	'/address',
	authVerification(['admin', 'user']),
	userController.addAddress
)

// Update Address
router.patch(
	'/address',
	authVerification(['admin', 'user']),
	userController.updateAddress
)

// Get Address
router.get(
	'/address',
	authVerification(['admin', 'user']),
	userController.getAddress
)

export { router as usersRouter }
