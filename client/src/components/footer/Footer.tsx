import { Globe } from 'lucide-react'
import {
	FaFacebookF,
	FaInstagram,
	FaLinkedinIn,
	FaXTwitter,
	FaYoutube,
} from 'react-icons/fa6'
import Image from 'next/image'

const Footer = () => {
	return (
		<footer className='py-10 bg-zinc-100 '>
			<div className='max-w-[65rem] mx-auto px-4 md:px-0'>
				{/* First row */}
				<div className='flex justify-between mb-6'>
					<h2 className='text-3xl italic font-archivo'>taterDash</h2>
					<div className='flex gap-4'>
						<div className='flex items-center gap-2 p-2 border rounded-md border-slate-400'>
							<Image
								src={'/in.webp'}
								alt='India'
								width={24}
								height={24}
								className='h-auto'
							/>
							<p>India</p>
						</div>
						<div className='flex items-center gap-2 p-2 border rounded-md border-slate-400'>
							<Globe />
							<p>English</p>
						</div>
					</div>
				</div>
				{/* The tables of links */}
				<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mb-8'>
					<div className='flex flex-col gap-1'>
						<h6 className='uppercase font-light tracking-[0.15rem] text-sm mb-2'>
							About taterDash
						</h6>
						<a
							href=''
							className='text-xs font-light text-zinc-600 tracking-widest'
						>
							Who We Are
						</a>
						<a
							href=''
							className='text-xs font-light text-zinc-600 tracking-widest'
						>
							Blog
						</a>
						<a
							href=''
							className='text-xs font-light text-zinc-600 tracking-widest'
						>
							Work With Us
						</a>
						<a
							href=''
							className='text-xs font-light text-zinc-600 tracking-widest'
						>
							Investor Relations
						</a>
						<a
							href=''
							className='text-xs font-light text-zinc-600 tracking-widest'
						>
							Report Fraud
						</a>
						<a
							href=''
							className='text-xs font-light text-zinc-600 tracking-widest'
						>
							Press Kit
						</a>
						<a
							href=''
							className='text-xs font-light text-zinc-600 tracking-widest'
						>
							Contact Us
						</a>
					</div>
					<div className='flex flex-col gap-1'>
						<h6 className='uppercase font-light tracking-[0.15rem] text-sm mb-2'>
							taterVerse
						</h6>
						<a
							href=''
							className='text-xs font-light text-zinc-600 tracking-widest'
						>
							taterDash
						</a>
						<a
							href=''
							className='text-xs font-light text-zinc-600 tracking-widest'
						>
							taterIt
						</a>
						<a
							href=''
							className='text-xs font-light text-zinc-600 tracking-widest'
						>
							Feeding India
						</a>
						<a
							href=''
							className='text-xs font-light text-zinc-600 tracking-widest'
						>
							Hypertater
						</a>
						<a
							href=''
							className='text-xs font-light text-zinc-600 tracking-widest'
						>
							taterLand
						</a>
					</div>
					<div className='flex flex-col gap-1'>
						<h6 className='uppercase font-light tracking-[0.15rem] text-sm mb-2'>
							For Restaurants
						</h6>
						<a
							href=''
							className='text-xs font-light text-zinc-600 tracking-widest'
						>
							Partner With Us
						</a>
						<a
							href=''
							className='text-xs font-light text-zinc-600 tracking-widest'
						>
							Apps For You
						</a>
					</div>
					<div className='flex flex-col gap-1'>
						<h6 className='uppercase font-light tracking-[0.15rem] text-sm mb-2'>
							Learn More
						</h6>
						<a
							href=''
							className='text-xs font-light text-zinc-600 tracking-widest'
						>
							Privacy
						</a>
						<a
							href=''
							className='text-xs font-light text-zinc-600 tracking-widest'
						>
							Security
						</a>
						<a
							href=''
							className='text-xs font-light text-zinc-600 tracking-widest'
						>
							Terms
						</a>
						<a
							href=''
							className='text-xs font-light text-zinc-600 tracking-widest'
						>
							Sitemap
						</a>
					</div>
					<div className='flex flex-col gap-1 '>
						<h6 className='uppercase font-light tracking-[0.15rem] text-sm mb-2'>
							Social Links
						</h6>
						<div className='flex gap-2 text-white'>
							<a
								href=''
								className='bg-black grid place-content-center p-1 rounded-full hover:bg-zin-600'
							>
								<FaLinkedinIn />
							</a>
							<a
								href=''
								className='bg-black grid place-content-center p-1 rounded-full hover:bg-zin-600'
							>
								<FaInstagram />
							</a>
							<a
								href=''
								className='bg-black grid place-content-center p-1 rounded-full hover:bg-zin-600'
							>
								<FaXTwitter />
							</a>
							<a
								href=''
								className='bg-black grid place-content-center p-1 rounded-full hover:bg-zin-600'
							>
								<FaYoutube />
							</a>
							<a
								href=''
								className='bg-black grid place-content-center p-1 rounded-full hover:bg-zin-600'
							>
								<FaFacebookF />
							</a>
						</div>
						<a href=''>
							<Image
								src={'/app-store-badge.svg'}
								alt='App Store'
								width={148}
								height={40}
								className='p-2 -mb-4'
							/>
						</a>
						<a href=''>
							<Image
								src={'/google-play-badge.png'}
								alt='Play Store'
								width={150}
								height={40}
							/>
						</a>
					</div>
				</div>
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
