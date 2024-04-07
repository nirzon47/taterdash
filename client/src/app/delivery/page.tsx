import BrandCarousel from '@/components/delivery/BrandCarousel'
import DeliveryCarousel from '@/components/delivery/DeliveryCarousel'
import Restaurants from '@/components/delivery/Restaurants'
import Footer from '@/components/footer/Footer'
import Header from '@/components/homepage/Header'
import Navigation from '@/components/homepage/Navigation'

const Delivery = () => {
	return (
		<div>
			<div className='max-w-[68rem] mx-auto'>
				<Header />
				<Navigation active='delivery' />
			</div>
			<div className='py-8 bg-zinc-100'>
				<div className='max-w-[68rem] mx-auto'>
					<DeliveryCarousel />
				</div>
			</div>
			<div className='max-w-[68rem] mx-auto'>
				<BrandCarousel />
				<Restaurants />
			</div>
			<Footer />
		</div>
	)
}

export default Delivery
