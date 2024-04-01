import { Router } from 'express'
import authVerification from '../middlewares/authVerification'
import restaurantController from '../controllers/restaurants/restaurants'
import upload from '../middlewares/multerConfig'
import restaurantName from '../middlewares/restaurantName'

const router = Router()

// Add Restaurant
router.post(
	'/',
	authVerification(['admin']),
	restaurantController.addRestaurant
)

// Edit Image
router.post(
	'/image/:restaurantId',
	[authVerification(['admin']), restaurantName, upload.single('image')],
	restaurantController.editImage
)

export { router as restaurantsRouter }
