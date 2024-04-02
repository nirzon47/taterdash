import { Router } from 'express'
import authVerification from '../middlewares/authVerification'
import cartController from '../controllers/cart/cart'

const router = Router()

// Add to cart
router.post('/', authVerification(['admin', 'user']), cartController.addToCart)

// Edit quantity
router.patch(
	'/',
	authVerification(['admin', 'user']),
	cartController.editQuantity
)

export { router as cartRouter }
