import clsx from 'clsx'
import { Star } from 'lucide-react'

const StickyTitle = ({ restaurantDetails }: { restaurantDetails: any }) => {
	const getColor = (rating: number) => {
		if (rating > 4.5) {
			return 'bg-green-900'
		} else if (rating > 4.0) {
			return 'bg-green-700'
		} else if (rating > 3.5) {
			return 'bg-yellow-500'
		} else if (rating > 3.0) {
			return 'bg-yellow-700'
		} else {
			return 'bg-zinc-200'
		}
	}

	return (
		<section className='sticky top-0 py-6 space-y-2 bg-white z-10'>
			<div className='items-center flex justify-between'>
				<h1 className='text-2xl md:text-4xl text-medium tracking-wide'>
					{restaurantDetails?.name}
				</h1>
				<div className='flex flex-col gap-0.5 items-center'>
					<p
						className={clsx(
							'p-1 md:p-2 rounded-md text-sm md:text-base px-2 md:px-4 text-white font-medium flex items-center gap-1',
							getColor(restaurantDetails?.rating)
						)}
					>
						{restaurantDetails?.rating} <Star size={16} color='white' />{' '}
					</p>
					<span className='text-sm text-slate-600 hidden md:inline-block'>
						Rating
					</span>
				</div>
			</div>
			<p className='text-slate-500 font-light mb-4'>
				{restaurantDetails?.cuisine.join(', ')}
			</p>
			<div className='text-primary font-medium text-xl tracking-wider underline-primary underline underline-offset-[12px]'>
				Order Online
				<hr className='mt-1.5' />
			</div>
		</section>
	)
}

export default StickyTitle
