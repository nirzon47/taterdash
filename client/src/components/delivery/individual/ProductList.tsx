import { ShoppingBasket } from 'lucide-react'

const ProductList = ({ restaurantDetails }: { restaurantDetails: any }) => {
	return (
		<div>
			<div className='space-y-12'>
				{restaurantDetails?.categories.map((category: any) => (
					<div key={category._id} className=''>
						<h2 className='text-2xl font-medium tracking-wide mb-2'>
							{category.name}
						</h2>
						<div className='space-y-3'>
							{category.items.map((item: any) => (
								<div key={item._id} className='flex justify-between'>
									<div>
										<p className='text-lg font-light'>{item.name}</p>
										<span>₹{item.price}</span>
									</div>
									<div className='bg-primary h-8 w-8 rounded-md grid place-content-center cursor-pointer hover:bg-red-700 duration-150'>
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
