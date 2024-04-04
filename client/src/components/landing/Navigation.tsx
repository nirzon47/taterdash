'use client'

import { AnimatePresence } from 'framer-motion'
import { Menu } from 'lucide-react'
import { useState } from 'react'
import Sidebar from './Sidebar'

const Navigation = () => {
	const [showOverlay, setShowOverlay] = useState<boolean>(false)

	const handleShowOverlay = () => {
		setShowOverlay(!showOverlay)
	}

	return (
		<nav className='flex items-center px-4 max-w-[65rem] h-[72px] mx-auto'>
			<Menu
				size={28}
				color='white'
				className='md:hidden'
				onClick={handleShowOverlay}
			/>
			<AnimatePresence>
				{showOverlay && <Sidebar handleShowOverlay={handleShowOverlay} />}
			</AnimatePresence>
			<div className='justify-end hidden w-full gap-6 font-light tracking-wide text-white md:flex'>
				<a href='' className='text-lg'>
					Add restaurant
				</a>
				<a href='' className='text-lg'>
					Log in
				</a>
				<a href='' className='text-lg'>
					Sign up
				</a>
			</div>
		</nav>
	)
}

export default Navigation
