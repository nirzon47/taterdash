import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'

import RegistrationDialog from '../authForm/RegistrationDialog'
import LoginDialog from '../authForm/LoginDialog'

const overlayVariants = {
	initial: { opacity: 0, x: '-100%' },
	animate: { opacity: 1, x: 0 },
	exit: { opacity: 0, x: '-100%' },
}

const Sidebar = ({ handleShowOverlay }: { handleShowOverlay: () => void }) => {
	return (
		<motion.div
			initial='initial'
			animate='animate'
			exit='exit'
			variants={overlayVariants}
			transition={{ duration: 0.1, ease: 'easeInOut' }}
			className='fixed top-0 left-0 w-full h-full bg-white z-40 p-6'
		>
			<div className='flex items-center justify-between mb-12'>
				<X size={20} onClick={handleShowOverlay} />
				<h2 className='text-2xl italic font-archivo font-black'>
					taterDash
				</h2>
			</div>
			<div className='grid gap-6 font-light text-slate-500'>
				<a href=''>Add restaurant</a>
				<Dialog>
					<DialogTrigger className='text-left'>Log in</DialogTrigger>
					<LoginDialog />
				</Dialog>
				<Dialog>
					<DialogTrigger className='text-left'>Sign up</DialogTrigger>
					<RegistrationDialog />
				</Dialog>
			</div>
		</motion.div>
	)
}

export default Sidebar
