import { useToast } from '@/components/ui/use-toast'
import axios from 'axios'
import { ShoppingBasket } from 'lucide-react'

const ProductList = ({ restaurantDetails }: { restaurantDetails: any }) => {
	const { toast } = useToast()

	const addToCart = async (itemId: any, restaurantId: any, quantity: any) => {
		const token = localStorage.getItem('token')

		try {
			await axios.post(
				`${process.env.NEXT_PUBLIC_BASE_URL}/cart`,
				{
					itemId,
					restaurantId,
					quantity,
				},
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			)

			toast({
				title: 'Added to cart',
				duration: 5000,
			})
		} catch (error: any) {
			console.error(error)

			toast({
				title: 'Adding to cart failed',
				description: error.response.data.message,
				variant: 'destructive',
				duration: 5000,
			})
		}
	}

	return (
		<div>
			<div className='space-y-12'>
				{restaurantDetails?.categories.map((category: any) => (
					<div key={category._id} className=''>
						<h2 className='text-xl md:text-2xl font-medium tracking-wide mb-2'>
							{category.name}
						</h2>
						<div className='space-y-3'>
							{category.items.map((item: any) => (
								<div key={item._id} className='flex justify-between'>
									<div>
										<p className='text-base md:text-lg font-light'>
											{item.name}
										</p>
										<span>₹{item.price}</span>
									</div>
									<div
										className='bg-primary h-8 w-8 rounded-md grid place-content-center cursor-pointer hover:bg-red-700 duration-150'
										onClick={() =>
											addToCart(item._id, restaurantDetails._id, 1)
										}
									>
										<ShoppingBasket color='white' />
									</div>
								</div>
							))}
						</div>
						<hr className='mt-8' />
					</div>
				))}
			</div>
		</div>
	)
}

export default ProductList
