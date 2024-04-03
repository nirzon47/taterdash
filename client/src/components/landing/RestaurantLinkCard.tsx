import { ChevronRight } from 'lucide-react'

const RestaurantLinkCard = ({ href, city }: { href: string; city: string }) => {
	return (
		<a
			href={href}
			className='flex items-center justify-between px-6 py-4 text-lg font-light duration-200 border rounded-md shadow hover:shadow-lg'
		>
			{city}
			<ChevronRight size={12} />
		</a>
	)
}

export default RestaurantLinkCard
