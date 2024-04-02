import { Router } from 'express'
import authVerification from '../middlewares/authVerification'
import orderController from '../controllers/order/order'

const router = Router()

// Checkout
router.post('/', authVerification(['admin', 'user']), orderController.checkout)

// Order History
router.get(
	'/history',
	authVerification(['admin', 'user']),
	orderController.orderHistory
)

export { router as orderRouter }
