import Image from 'next/image'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '../ui/carousel'

const brands = [
	"Domino's Pizza",
	'WOW! Momo',
	'Arsalan',
	'KFC',
	'Chowman',
	'Burger King',
	'Gupta Brothers',
	"Kwality Wall's",
]

const BrandCarousel = () => {
	return (
		<div className='my-8'>
			<h2 className='text-3xl tracking-wide font-medium mb-6'>
				Brands we love
			</h2>
			<Carousel>
				<CarouselContent>
					{Array.from({ length: 8 }).map((_, index: number) => (
						<CarouselItem key={Math.random()} className='basis-1/6'>
							<div className='flex flex-col items-center gap-4'>
								<div className='p-4 grid place-content-center shadow-md rounded-full'>
									<Image
										src={`/brands/brand-${index + 1}.avif`}
										alt='brand'
										width={150}
										height={150}
										className='rounded-full'
									/>
								</div>
								<p className='text-xl tracking-wide'>{brands[index]}</p>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	)
}

export default BrandCarousel
