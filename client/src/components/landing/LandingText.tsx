const LandingText = () => {
	return (
		<div className='h-[calc(400px-72px)] sm:h-[calc(500px-72px)] lg:h-[calc(570px-72px)] flex flex-col justify-center items-center gap-6'>
			<h1 className='text-5xl italic text-white font-archivo sm:text-7xl'>
				taterDash
			</h1>
			<h2 className='mx-4 text-xl font-light text-center text-white sm:text-4xl'>
				Find the best restaurants, cafés
				<br className='hidden sm:inline-block' /> and bars in India
			</h2>
		</div>
	)
}

export default LandingText
