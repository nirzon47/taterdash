'use client'

import { ChevronRight } from 'lucide-react'
import { useRouter } from 'next/navigation'

const RestaurantLinkCard = ({ city }: { city: string }) => {
	const router = useRouter()

	return (
		<span
			className='flex items-center justify-between px-6 py-4 text-lg font-light duration-200 border rounded-md shadow hover:shadow-lg cursor-pointer'
			onClick={() => router.push(`/delivery`)}
		>
			{city}
			<ChevronRight size={12} />
		</span>
	)
}

export default RestaurantLinkCard
