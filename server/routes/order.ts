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

// Confirm Payment
router.post(
	'/confirm',
	authVerification(['admin', 'user']),
	orderController.confirmPayment
)

export { router as orderRouter }
