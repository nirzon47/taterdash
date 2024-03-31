import { Router } from 'express'
import userController from '../controllers/users'
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

export { router as usersRouter }
