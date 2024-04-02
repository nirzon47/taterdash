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

// Edit Item
router.patch('/:itemId', authVerification(['admin']), itemsController.editItem)

// Delete Item
router.delete(
	'/:itemId',
	authVerification(['admin']),
	itemsController.deleteItem
)

export { router as itemRouter }
