'use client'

import Image from 'next/image'
import clsx from 'clsx'
import { useRouter } from 'next/navigation'

const Navigation = ({ active }: { active: string }) => {
	const router = useRouter()

	return (
		<nav className='flex items-center gap-16 border-b mt-8'>
			<button
				onClick={() => {
					!(active === 'delivery') && router.push('/delivery')
				}}
			>
				<div className='flex items-center gap-2'>
					<div
						className={clsx(
							'p-4 flex items-center rounded-full',
							active === 'delivery' ? 'bg-amber-100' : 'bg-zinc-200'
						)}
					>
						<Image
							src={
								active === 'delivery'
									? '/delivery.webp'
									: '/delivery-inactive.webp'
							}
							alt='delivery'
							width={32}
							height={32}
							className={'h-auto'}
						/>
					</div>
					<h3
						className={clsx(
							'text-xl font-medium',
							active === 'delivery' ? 'text-primary' : 'text-zinc-600'
						)}
					>
						Delivery
					</h3>
				</div>
				{active === 'delivery' ? (
					<hr className='border-primary mt-4 border-2 rounded-full' />
				) : (
					<div className='h-[calc(1rem+2px)]'></div>
				)}
			</button>
			<button
				onClick={() => {
					!(active === 'dine-out') && router.push('/dine-out')
				}}
			>
				<div className='flex items-center gap-2'>
					<div
						className={clsx(
							'p-4 flex items-center rounded-full',
							active === 'dine-out' ? 'bg-emerald-100' : 'bg-zinc-200'
						)}
					>
						<Image
							src={
								active === 'dine-out'
									? '/dine-out.webp'
									: '/dine-out-inactive.webp'
							}
							alt='delivery'
							width={32}
							height={32}
							className={'h-auto'}
						/>
					</div>
					<h3
						className={clsx(
							'text-xl font-medium',
							active === 'dine-out' ? 'text-primary' : 'text-zinc-600'
						)}
					>
						Dining out
					</h3>
				</div>
				{active === 'dine-out' ? (
					<hr className='border-primary mt-4 border-2 rounded-full' />
				) : (
					<div className='h-[calc(1rem+2px)]'></div>
				)}
			</button>
			<button
				onClick={() => {
					!(active === 'nightlife') && router.push('/nightlife')
				}}
			>
				<div className='flex items-center gap-2'>
					<div
						className={clsx(
							'p-4 flex items-center rounded-full',
							active === 'nightlife' ? 'bg-blue-100' : 'bg-zinc-200'
						)}
					>
						<Image
							src={
								active === 'nightlife'
									? '/nightlife.webp'
									: '/nightlife-inactive.webp'
							}
							alt='delivery'
							width={32}
							height={32}
							className={'h-auto'}
						/>
					</div>
					<h3
						className={clsx(
							'text-xl font-medium',
							active === 'nightlife' ? 'text-primary' : 'text-zinc-600'
						)}
					>
						Nightlife
					</h3>
				</div>
				{active === 'nightlife' ? (
					<hr className='border-primary mt-4 border-2 rounded-full' />
				) : (
					<div className='h-[calc(1rem+2px)]'></div>
				)}
			</button>
		</nav>
	)
}

export default Navigation
