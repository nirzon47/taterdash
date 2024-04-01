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

// Get All Restaurants
router.get('/', restaurantController.getRestaurants)

// Edit Restaurant
router.patch(
	'/:restaurantId',
	[authVerification(['admin']), restaurantName],
	restaurantController.editRestaurant
)

// Delete Restaurant
router.delete(
	'/:restaurantId',
	[authVerification(['admin']), restaurantName],
	restaurantController.deleteRestaurant
)

// Edit Image
router.patch(
	'/image/:restaurantId',
	[authVerification(['admin']), restaurantName, upload.single('image')],
	restaurantController.editImage
)

// Add Item
router.post(
	'/item/:restaurantId',
	[authVerification(['admin']), restaurantName],
	restaurantController.addItem
)

export { router as restaurantsRouter }
