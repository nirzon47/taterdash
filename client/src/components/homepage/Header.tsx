'use client'

import { useEffect, useState } from 'react'
import DropdownComponent from '../landing/DropdownComponent'
import Logo from './Logo'
import SearchBar from './SearchBar'
import { verifyToken } from '@/lib/verifyToken'
import { ShoppingCartIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'

const Header = () => {
	const [user, setUser] = useState<any>()
	const router = useRouter()

	useEffect(() => {
		const user = verifyToken()

		if (!user) {
			window.location.href = '/'
		}

		setUser(user)
	}, [])

	return (
		<header className='mx-auto py-4 flex items-center justify-between mb-4'>
			<div className='flex gap-8 items-center'>
				<Logo />
				<SearchBar />
			</div>
			<div className='flex gap-8 items-center'>
				<DropdownComponent user={user} />
				<div
					className='bg-primary px-4 py-2 flex gap-2 rounded-md cursor-pointer hover:bg-red-600 duration-200'
					onClick={() => router.push('/cart')}
				>
					<span className='font-bold text-white'>Cart </span>
					<ShoppingCartIcon color='white' />
				</div>
			</div>
		</header>
	)
}

export default Header
