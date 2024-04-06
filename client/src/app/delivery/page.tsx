import Header from '@/components/homepage/Header'
import Navigation from '@/components/homepage/Navigation'

const Delivery = () => {
	return (
		<div className='max-w-[68rem] mx-auto'>
			<Header />
			<Navigation active='delivery' />
		</div>
	)
}

export default Delivery
