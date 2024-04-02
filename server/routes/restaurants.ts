import { Router } from 'express'
import authVerification from '../middlewares/authVerification'
import restaurantController from '../controllers/restaurants/restaurants'
import upload from '../middlewares/multerConfig'
import restaurantName from '../middlewares/restaurantName'

const router = Router()

/// Restaurant APIs
// Add Restaurant
router.post(
	'/',
	authVerification(['admin']),
	restaurantController.addRestaurant
)

// // Get All Restaurants
// router.get('/', restaurantController.getRestaurants)

// Edit Restaurant
router.patch(
	'/:restaurantId',
	[authVerification(['admin']), restaurantName],
	restaurantController.editRestaurant
)

// // Edit Image
// router.patch(
// 	'/image/:restaurantId',
// 	[authVerification(['admin']), restaurantName, upload.single('image')],
// 	restaurantController.editImage
// )

// Delete Restaurant
router.delete(
	'/:restaurantId',
	[authVerification(['admin']), restaurantName],
	restaurantController.deleteRestaurant
)

// /// Item APIs

// // Add Item
// router.post(
// 	'/item/:restaurantId',
// 	[authVerification(['admin']), restaurantName],
// 	restaurantController.addItem
// )

// // Get Items
// router.get(
// 	'/item/:restaurantId',
// 	[authVerification(['admin']), restaurantName],
// 	restaurantController.getItems
// )

// // Edit Item
// router.patch(
// 	'/item/:restaurantId',
// 	[authVerification(['admin']), restaurantName],
// 	restaurantController.editItem
// )

// // Delete Item
// router.delete(
// 	'/item/:restaurantId',
// 	[authVerification(['admin']), restaurantName],
// 	restaurantController.deleteItem
// )

export { router as restaurantsRouter }
