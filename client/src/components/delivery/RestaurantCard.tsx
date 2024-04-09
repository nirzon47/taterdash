import clsx from 'clsx'
import { Star } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

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

	const router = useRouter()

	return (
		<div
			className='p-4 space-y-2 hover:shadow-md rounded-lg duration-200 cursor-pointer grid justify-center items-center'
			onClick={() => router.push(`delivery/${restaurant._id}`)}
		>
			<Image
				src={`${process.env.NEXT_PUBLIC_URL}/${restaurant.imagePath}`}
				alt={restaurant.name}
				width={328}
				height={248}
				className='object-cover w-[270px] h-[204px] md:w-[330px] md:h-[240px] rounded-xl mx-auto'
			/>
			<div className='flex items-center justify-between'>
				<h2 className='font-medium tracking-wider text-zinc-800'>
					{restaurant.name}
				</h2>
				<p
					className={clsx(
						'p-0.5 rounded-md text-xs px-2 text-white font-medium flex items-center gap-1',
						color
					)}
				>
					{restaurant.rating} <Star size={10} color='white' />
				</p>
			</div>
			<div className='flex items-center justify-between'>
				<p className='text-sm truncate text-zinc-500 font-light max-w-[100px] md:max-w-[60%]'>
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
