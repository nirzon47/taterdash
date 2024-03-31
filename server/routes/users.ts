import { Router } from 'express'
import userController from '../controllers/users'

const router = Router()

router.post('/register', userController.registerUser)

export { router as usersRouter }
