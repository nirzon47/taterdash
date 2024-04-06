import Footer from '@/components/footer/Footer'
import Header from '@/components/homepage/Header'
import Navigation from '@/components/homepage/Navigation'

const page = () => {
	return (
		<>
			<div className='max-w-[68rem] mx-auto'>
				<Header />
				<Navigation active='nightlife' />
			</div>
			<div className='bg-red-100 h-96 grid place-content-center font-bold space-y-8'>
				<h1 className='text-center text-3xl'>
					🔞 Not allowed without government verification 🔞
				</h1>
				<p className='text-center text-2xl font-semibold'>
					We are not authorized to do that! Sorry!
				</p>
			</div>
			<Footer />
		</>
	)
}

export default page
