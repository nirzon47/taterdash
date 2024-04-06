import BrandCarousel from '@/components/delivery/BrandCarousel'
import DeliveryCarousel from '@/components/delivery/DeliveryCarousel'
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
			</div>
		</div>
	)
}

export default Delivery
