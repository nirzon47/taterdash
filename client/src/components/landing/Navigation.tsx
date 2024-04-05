'use client'

import { AnimatePresence } from 'framer-motion'
import { Menu } from 'lucide-react'
import { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { Dialog, DialogTrigger } from '@radix-ui/react-dialog'
import LoginDialog from '../authForm/LoginDialog'
import RegistrationDialog from '../authForm/RegistrationDialog'
import { verifyToken } from '@/lib/verifyToken'
import DropdownComponent from './DropdownComponent'

const Navigation = () => {
	const [showOverlay, setShowOverlay] = useState<boolean>(false)
	const [user, setUser] = useState<any>()

	const handleShowOverlay = () => {
		setShowOverlay(!showOverlay)
	}

	useEffect(() => {
		setUser(verifyToken())
	}, [])

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
			<div className='justify-end items-center hidden w-full gap-6 font-light tracking-wide text-white md:flex'>
				<a href='' className='text-lg'>
					Add restaurant
				</a>
				{user ? (
					<DropdownComponent user={user} />
				) : (
					<>
						<Dialog>
							<DialogTrigger className='text-left text-lg'>
								Log in
							</DialogTrigger>
							<LoginDialog />
						</Dialog>
						<Dialog>
							<DialogTrigger className='text-left text-lg'>
								Sign up
							</DialogTrigger>
							<RegistrationDialog />
						</Dialog>
					</>
				)}
			</div>
		</nav>
	)
}

export default Navigation
