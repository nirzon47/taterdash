'use client'

import Header from '@/components/homepage/Header'
import { Provider } from 'react-redux'
import { store } from '@/store/store'
import CartBody from '@/components/cart/CartBody'
import Footer from '@/components/footer/Footer'

const Cart = () => {
	return (
		<Provider store={store}>
			<div className='max-w-[68rem] mx-auto mb-16'>
				<Header />
				<CartBody />
			</div>
			<Footer />
		</Provider>
	)
}

export default Cart
