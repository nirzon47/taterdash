import { Globe } from 'lucide-react'
import Image from 'next/image'

const FooterHeader = () => {
	return (
		<div className='flex justify-between flex-wrap mb-6'>
			<h2 className='text-3xl italic font-archivo font-black'>taterDash</h2>
			<div className='flex gap-4'>
				<div className='flex items-center gap-2 p-2 border rounded-md border-slate-400'>
					<Image
						src={'/in.webp'}
						alt='India'
						width={24}
						height={24}
						className='h-auto'
					/>
					<p>India</p>
				</div>
				<div className='flex items-center gap-2 p-2 border rounded-md border-slate-400'>
					<Globe />
					<p>English</p>
				</div>
			</div>
		</div>
	)
}

export default FooterHeader
