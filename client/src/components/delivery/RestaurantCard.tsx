import clsx from 'clsx'
import Image from 'next/image'

const RestaurantCard = ({ restaurant }: { restaurant: any }) => {
	let color
	if (restaurant.rating > 4.5) {
		color = 'bg-green-900'
	} else if (restaurant.rating > 4.0) {
		color = 'bg-green-700'
	} else if (restaurant.rating > 3.5) {
		color = 'bg-yellow-500'
	} else if (restaurant.rating > 3.0) {
		color = 'bg-yellow-700'
	} else {
		color = 'bg-zinc-200'
	}

	return (
		<div className='p-4 space-y-2 hover:shadow-md rounded-lg duration-200 cursor-pointer'>
			<Image
				src={`${process.env.NEXT_PUBLIC_URL}/${restaurant.imagePath}`}
				alt={restaurant.name}
				width={328}
				height={248}
				className='object-cover w-[330px] h-[240px] rounded-xl'
			/>
			<div className='flex items-center justify-between'>
				<h2 className='font-medium tracking-wider text-zinc-800'>
					{restaurant.name}
				</h2>
				<p
					className={clsx(
						'p-0.5 rounded-md text-xs px-2 text-white font-medium',
						color
					)}
				>
					{restaurant.rating}
				</p>
			</div>
			<div className='flex items-center justify-between'>
				<p className='text-sm truncate text-zinc-500 font-light max-w-[60%]'>
					{restaurant.cuisine.join(', ')}
				</p>
				<p className='text-sm text-zinc-600 font-light'>
					{restaurant.deliveryTimeInMinutes} mins
				</p>
			</div>
			<hr className='my-2' />
			<div className='mb-2 flex gap-4 items-center'>
				<Image src={'/safe.avif'} alt='safety' width={48} height={18} />
				<p className='text-xs text-zinc-400'>
					Follows all Max Safety measures to ensure your food is safe
				</p>
			</div>
		</div>
	)
}

export default RestaurantCard
