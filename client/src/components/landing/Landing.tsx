'use client'

import Image from 'next/image'
import Navigation from './Navigation'
import LandingText from './LandingText'
import { useEffect } from 'react'

const Landing = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<div>
			<div className='relative'>
				<Image
					src='/landing.webp'
					alt='Best Food'
					width={1920}
					height={1080}
					className='h-[400px] sm:h-[500px] lg:h-[570px] w-full object-cover absolute top-0 -z-10'
				/>
			</div>
			<div>
				<Navigation />
				<LandingText />
			</div>
		</div>
	)
}

export default Landing
