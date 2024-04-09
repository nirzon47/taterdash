'use client'

import MainImage from '@/components/delivery/individual/MainImage'
import ProductList from '@/components/delivery/individual/ProductList'
import StickyTitle from '@/components/delivery/individual/StickyTitle'
import Footer from '@/components/footer/Footer'
import Header from '@/components/homepage/Header'
import { useToast } from '@/components/ui/use-toast'
import axios from 'axios'
import clsx from 'clsx'
import { Star } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'

const RestaurantDetails = ({ params }: { params: { id: string } }) => {
	const [restaurantDetails, setRestaurantDetails] = useState<any>()
	const { toast } = useToast()

	const getDetails = useCallback(async () => {
		try {
			const { data } = await axios.get(
				`${process.env.NEXT_PUBLIC_BASE_URL}/restaurant/${params.id}`
			)

			setRestaurantDetails(data.restaurant)
		} catch (error) {
			toast({
				title: 'Oops!',
				description:
					'There seems to be an error fetching data from the server',
				variant: 'destructive',
			})
		}
	}, [toast, params])

	useEffect(() => {
		getDetails()
	}, [getDetails])

	return (
		<div className='px-2 md:px-4 lg:px-0'>
			<div className='max-w-[68rem] mx-auto relative mb-8'>
				<Header />
				<MainImage restaurantDetails={restaurantDetails} />
				<StickyTitle restaurantDetails={restaurantDetails} />
				<ProductList restaurantDetails={restaurantDetails} />
			</div>
			<Footer />
		</div>
	)
}

export default RestaurantDetails
