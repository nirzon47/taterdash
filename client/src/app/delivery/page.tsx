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
					<h2 className='text-3xl tracking-wide font-medium mb-6'>
						Categories we offer
					</h2>
					<DeliveryCarousel />
				</div>
			</div>
		</div>
	)
}

export default Delivery
