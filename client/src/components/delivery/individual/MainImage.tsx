import Image from 'next/image'

const MainImage = ({ restaurantDetails }: { restaurantDetails: any }) => {
	return (
		<div className='flex gap-2'>
			<div className='overflow-hidden'>
				<Image
					src={`${process.env.NEXT_PUBLIC_URL}/${restaurantDetails?.imagePath}`}
					alt={restaurantDetails?.name}
					width={690}
					height={370}
					className='object-cover hover:scale-105 duration-200 brightness-95 hover:brightness-100'
					quality={100}
				/>
			</div>
			<div className='bg-zinc-300 flex-1'></div>
		</div>
	)
}

export default MainImage
