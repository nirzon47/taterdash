import { Router } from 'express'
import userController from '../controllers/users'

const router = Router()

// Register User
router.post('/register', userController.registerUser)

// Login User
router.post('/login', userController.loginUser)

export { router as usersRouter }
