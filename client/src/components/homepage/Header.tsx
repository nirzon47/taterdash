'use client'

import { useEffect, useState } from 'react'
import DropdownComponent from '../landing/DropdownComponent'
import Logo from './Logo'
import SearchBar from './SearchBar'
import { verifyToken } from '@/lib/verifyToken'

const Header = () => {
	const [user, setUser] = useState<any>()

	useEffect(() => {
		const user = verifyToken()
		console.log(user)

		if (!user) {
			window.location.href = '/'
		}

		setUser(user)
	}, [])

	return (
		<nav className='max-w-[68rem] mx-auto py-4 flex items-center justify-between mb-4'>
			<div className='flex gap-8 items-center'>
				<Logo />
				<SearchBar />
			</div>
			<DropdownComponent user={user} />
		</nav>
	)
}

export default Header
