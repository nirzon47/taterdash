import DineoutCarousel from '@/components/dineout/DineoutCarousel'
import Footer from '@/components/footer/Footer'
import Header from '@/components/homepage/Header'
import Navigation from '@/components/homepage/Navigation'

const DineOut = () => {
	return (
		<div className='px-2 md:px-4 lg:px-0'>
			<div className='max-w-[68rem] mx-auto'>
				<Header />
				<Navigation active='dine-out' />
			</div>
			<div className='py-8 bg-zinc-100'>
				<div className='max-w-[65rem] mx-auto'>
					<h2 className='text-xl md:text-3xl tracking-wide font-medium mb-6'>
						Collections
					</h2>
					<p className='text-slate-700 tracking-wide font-light text-base md:text-lg mb-4'>
						Explore curated lists of top restaurants, cafes, pubs, and
						bars in your area, based on trends
					</p>
					<DineoutCarousel />
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default DineOut
