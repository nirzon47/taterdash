'use client'

import { useToast } from '@/components/ui/use-toast'
import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/store/store'
import { setCart, setCartTotal } from '@/store/cartSlice'
import CartItem from './CartItem'

const CartBody = () => {
	const [cartData, setCartData] = useState<any>()
	const dispatch = useAppDispatch()
	const { toast } = useToast()
	const total = useAppSelector((state) => state.cart.total)

	const getCart = useCallback(async () => {
		try {
			const { data } = await axios.get(
				`${process.env.NEXT_PUBLIC_BASE_URL}/cart/`,
				{
					headers: {
						Authorization: `Bearer ${localStorage.getItem('token')}`,
					},
				}
			)

			setCartData(data.cart.items)
			dispatch(setCart(data.cart.items))
			dispatch(
				setCartTotal(
					cartData?.reduce(
						(acc: any, item: any) =>
							acc + item.item.price * item.quantity,
						0
					)
				)
			)
		} catch (error: any) {
			toast({
				title: 'Oops!',
				description: 'Looks like your cart is empty',
				variant: 'destructive',
			})
		}
	}, [toast, dispatch, cartData])

	useEffect(() => {
		getCart()
	}, [getCart])

	return (
		<>
			<div className='flex justify-between items-center'>
				<h1 className='text-3xl tracking-wide font-medium my-6 text-slate-700'>
					Your Cart
				</h1>
				<p className='text-3xl'>
					Total: <span className='text-primary'>₹{total}</span>
				</p>
			</div>
			<div className='space-y-4'>
				{cartData?.length === 0 && (
					<p className='text-center text-3xl'>Cart is empty</p>
				)}
				{cartData?.map((item: any) => (
					<CartItem key={item._id} item={item} />
				))}
			</div>

			<div className='flex justify-end'>
				<button className='bg-primary hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md mt-6 duration-200'>
					Checkout
				</button>
			</div>
		</>
	)
}

export default CartBody
