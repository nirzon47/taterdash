'use client'

import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'
import { useToast } from '../ui/use-toast'
import RestaurantCard from './RestaurantCard'
import Image from 'next/image'

const Restaurants = () => {
	const [restaurants, setRestaurants] = useState<any>([])
	const [loading, setLoading] = useState<boolean>(false)

	const { toast } = useToast()

	const getRestaurants = useCallback(async () => {
		let timeout
		setLoading(true)

		try {
			timeout = setTimeout(() => {
				toast({
					title: 'Server spinning up',
					description: 'Please wait while we log you in',
					duration: 4000,
				})
			}, 3000)

			const { data } = await axios.get(
				`${process.env.NEXT_PUBLIC_BASE_URL}/restaurant/`
			)

			setRestaurants(data.restaurants)
		} catch (error) {
			toast({
				title: 'Oops!',
				description:
					'There seems to be an error fetching data from the server',
				variant: 'destructive',
			})
		} finally {
			setLoading(false)
			clearTimeout(timeout)
		}
	}, [toast])

	useEffect(() => {
		getRestaurants()
	}, [getRestaurants])

	return (
		<div className='pb-6 pt-12 md:pt-24'>
			<h2 className='text-xl md:text-3xl tracking-wide font-medium mb-6'>
				Delivery Restaurants
			</h2>
			{loading && (
				<div className='flex justify-center items-center my-4'>
					<Image src='/loader.svg' alt='spinner' width={48} height={48} />
				</div>
			)}
			<div className='my-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
				{restaurants.map((restaurant: any) => (
					<RestaurantCard restaurant={restaurant} key={restaurant._id} />
				))}
			</div>
		</div>
	)
}

export default Restaurants
