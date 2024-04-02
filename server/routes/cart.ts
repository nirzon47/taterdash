import { Router } from 'express'
import authVerification from '../middlewares/authVerification'
import cartController from '../controllers/cart/cart'

const router = Router()

// Add to cart
router.post('/', authVerification(['admin', 'user']), cartController.addToCart)

// Get cart
router.get('/', authVerification(['admin', 'user']), cartController.getCart)

// Edit quantity
router.patch(
	'/',
	authVerification(['admin', 'user']),
	cartController.editQuantity
)

// Delete cart
router.delete(
	'/',
	authVerification(['admin', 'user']),
	cartController.deleteFromCart
)

export { router as cartRouter }
