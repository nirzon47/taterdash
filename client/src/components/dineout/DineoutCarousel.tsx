import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'
import Image from 'next/image'

const title = [
	'New In Town',
	'Best of live screenings',
	'What A View',
	'K-Cuisine Hangouts',
	'Bar Hopping',
	'Finest Microbreweries',
	'The Big Fat Buffet',
]

const DineoutCarousel = () => {
	return (
		<Carousel>
			<CarouselContent>
				{Array.from({ length: 7 }).map((_, index: number) => (
					<CarouselItem key={Math.random()} className='basis-1/4'>
						<div className='relative'>
							<Image
								src={`/dineout/dineout-${index + 1}.avif`}
								alt='dineout'
								height={320}
								width={340}
								className='rounded-lg h-[320px] object-cover'
							/>
							<h4 className='absolute bottom-4 left-4 text-white z-50'>
								{title[index]}
							</h4>
							<div className='absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.4)] to-transparent'></div>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	)
}

export default DineoutCarousel
