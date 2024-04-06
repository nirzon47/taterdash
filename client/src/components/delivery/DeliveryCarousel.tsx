import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '../ui/carousel'
import Image from 'next/image'

const categories = [
	'Biryani',
	'Pizza',
	'Rolls',
	'Chicken',
	'Burger',
	'Cake',
	'Momos',
	'North Indian',
	'Thali',
	'Chowmein',
	'Fried Rice',
]

const DeliveryCarousel = () => {
	return (
		<div>
			<h2 className='text-3xl tracking-wide font-medium mb-6'>
				Categories we offer
			</h2>
			<Carousel>
				<CarouselContent>
					{Array.from({ length: 11 }).map((_, index: number) => (
						<CarouselItem
							className='basis-1/6 flex flex-col items-center gap-2'
							key={Math.random()}
						>
							<Image
								src={`/delivery/delivery-${index + 1}.avif`}
								alt='delivery'
								height={150}
								width={150}
								className='rounded-full object-cover shadow-md'
							/>
							<p className='text-xl tracking-wide'>
								{categories[index]}
							</p>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	)
}

export default DeliveryCarousel
