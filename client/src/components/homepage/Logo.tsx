const Logo = () => {
	return (
		<h2
			className='text-3xl italic font-archivo font-black cursor-pointer'
			onClick={() => (window.location.href = '/')}
		>
			<span className='hidden md:inline-block'>taterDash</span>
			<span className='md:hidden'>tD</span>
		</h2>
	)
}

export default Logo
