import cities from '../../json/cities.json'
import RestaurantLinkCard from './RestaurantLinkCard'

const RestaurantLinks = () => {
	const cityArray: string[] = cities.cities

	return (
		<div className='grid items-center justify-center grid-cols-1 mb-4 gap-x-4 gap-y-8 md:grid-cols-3'>
			{cityArray.map((city) => (
				<RestaurantLinkCard href='#' city={city} key={city} />
			))}
		</div>
	)
}

export default RestaurantLinks
