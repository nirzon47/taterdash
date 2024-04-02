import { Router } from 'express'
import itemsController from '../controllers/items/items'
import authVerification from '../middlewares/authVerification'

const router = Router()

// Add Item
router.post(
	'/:restaurantId',
	authVerification(['admin']),
	itemsController.addItem
)

export { router as itemRouter }
