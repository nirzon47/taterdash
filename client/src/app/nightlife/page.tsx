import Header from '@/components/homepage/Header'
import Navigation from '@/components/homepage/Navigation'

const page = () => {
	return (
		<div className='max-w-[68rem] mx-auto'>
			<Header />
			<Navigation active='nightlife' />
		</div>
	)
}

export default page
