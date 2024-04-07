import Footer from '@/components/footer/Footer'
import Header from '@/components/homepage/Header'

const Success = () => {
	return (
		<>
			<div className='max-w-[68rem] mx-auto'>
				<Header />
				<div className='h-[50vh] flex items-center justify-center'>
					<h1 className='text-3xl font-medium text-center text-green-500'>
						Thank you for your order!
					</h1>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default Success
