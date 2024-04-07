'use client'

import Footer from '@/components/footer/Footer'
import Header from '@/components/homepage/Header'
import AddressForm from '@/components/profile/AddressForm'

const Profile = () => {
	return (
		<div>
			<div className='max-w-[68rem] mx-auto'>
				<Header />
				<h1 className='text-3xl tracking-wide font-medium my-6 text-slate-700 mt-16'>
					Your Address
				</h1>
				<AddressForm showButton={true} disabled={false} />
			</div>

			<Footer />
		</div>
	)
}

export default Profile
