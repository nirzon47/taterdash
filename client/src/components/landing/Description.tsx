import Image from 'next/image'
import RestaurantLinks from './RestaurantLinks'

const Description = () => {
	return (
		<div className='px-8 my-10 max-w-[65rem] mx-auto'>
			<h2 className='mb-10 text-2xl font-light text-center md:text-4xl'>
				Popular locations in{' '}
				<Image
					src={'/in.webp'}
					width={40}
					height={40}
					alt='India'
					className='inline'
				/>{' '}
				India
			</h2>
			<p className='mb-10 font-light text-justify text-align-end text-slate-500 sm:text-xl'>
				From swanky upscale restaurants to the cosiest hidden gems serving
				the most incredible food, Zomato covers it all. Explore menus, and
				millions of restaurant photos and reviews from users just like you,
				to find your next great meal.
			</p>
			<RestaurantLinks />
		</div>
	)
}

export default Description
