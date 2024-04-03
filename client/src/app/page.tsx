import Image from 'next/image'
import Landing from '../components/landing/Landing'

const page = () => {
	const cities = [
		'Agra Restaurants',
		'Ahmedabad Restaurants',
		'Ajmer Restaurants',
		'Alappuzha Restaurants',
		'Allahabad Restaurants',
		'Amravati Restaurants',
		'Amritsar Restaurants',
		'Aurangabad Restaurants',
		'Bengaluru Restaurants',
		'Bhopal Restaurants',
		'Bhubaneswar Restaurants',
		'Chandigarh Restaurants',
		'Chennai Restaurants',
		'Coimbatore Restaurants',
		'Cuttack Restaurants',
		'Darjeeling Restaurants',
		'Dehradun Restaurants',
		'Delhi NCR Restaurants',
		'Dharamshala Restaurants',
		'Gangtok Restaurants',
		'Goa Restaurants',
		'Gorakhpur Restaurants',
		'Guntur Restaurants',
		'Guwahati Restaurants',
		'Gwalior Restaurants',
		'Haridwar Restaurants',
		'Hyderabad Restaurants',
		'Indore Restaurants',
		'Jabalpur Restaurants',
		'Jaipur Restaurants',
		'Jalandhar Restaurants',
		'Jammu Restaurants',
		'Jamnagar Restaurants',
		'Jamshedpur Restaurants',
		'Jhansi Restaurants',
		'Jodhpur Restaurants',
		'Junagadh Restaurants',
		'Kanpur Restaurants',
		'Khajuraho Restaurants',
		'Khamgaon Restaurants',
		'Kharagpur Restaurants',
		'Kochi Restaurants',
		'Kolhapur Restaurants',
		'Kolkata Restaurants',
		'Kota Restaurants',
		'Lucknow Restaurants',
		'Ludhiana Restaurants',
		'Madurai Restaurants',
		'Manali Restaurants',
		'Mangalore Restaurants',
		'Manipal Restaurants',
		'Meerut Restaurants',
		'Mumbai Restaurants',
		'Mussoorie Restaurants',
		'Mysore Restaurants',
		'Nagpur Restaurants',
		'Nainital Restaurants',
		'Nashik Restaurants',
		'Neemrana Restaurants',
		'Ooty Restaurants',
		'Palakkad Restaurants',
		'Patiala Restaurants',
		'Patna Restaurants',
		'Puducherry Restaurants',
		'Pune Restaurants',
		'Pushkar Restaurants',
		'Raipur Restaurants',
		'Rajkot Restaurants',
		'Ranchi Restaurants',
		'Rishikesh Restaurants',
		'Salem Restaurants',
		'Shimla Restaurants',
		'Siliguri Restaurants',
		'Srinagar Restaurants',
		'Surat Restaurants',
		'Thrissur Restaurants',
		'Tirupati Restaurants',
		'Trichy Restaurants',
		'Trivandrum Restaurants',
		'Udaipur Restaurants',
		'Vadodara Restaurants',
		'Varanasi Restaurants',
		'Vellore Restaurants',
		'Vijayawada Restaurants',
		'Visakhapatnam Restaurants',
	]
	return (
		<>
			<Landing />
			<div className='px-8 my-10 max-w-[60rem] mx-auto'>
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
					From swanky upscale restaurants to the cosiest hidden gems
					serving the most incredible food, Zomato covers it all. Explore
					menus, and millions of restaurant photos and reviews from users
					just like you, to find your next great meal.
				</p>
			</div>
		</>
	)
}

export default page
