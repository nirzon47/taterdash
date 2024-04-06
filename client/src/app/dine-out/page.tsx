import Header from '@/components/homepage/Header'
import Navigation from '@/components/homepage/Navigation'

const DineOut = () => {
	return (
		<div className='max-w-[68rem] mx-auto'>
			<Header />
			<Navigation active='dine-out' />
		</div>
	)
}

export default DineOut
