import FooterHeader from './FooterHeader'
import FooterLinks from './FooterLinks'

const Footer = () => {
	return (
		<footer className='py-10 bg-zinc-100 '>
			<div className='max-w-[65rem] mx-auto px-4 md:px-0'>
				<FooterHeader />
				<FooterLinks />
				<hr className='border-zinc-300 mb-4' />
				<p className='text-sm font-light text-zinc-600 tracking-wide'>
					By continuing past this page, you agree that you like potatoes.
					All rights reserved.
				</p>
			</div>
		</footer>
	)
}

export default Footer
