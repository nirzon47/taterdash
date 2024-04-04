import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import RegistrationForm from '../authForm/RegistrationForm'

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
					<DialogContent>
						<DialogHeader>
							<DialogTitle>Are you absolutely sure?</DialogTitle>
							<DialogDescription>
								This action cannot be undone. This will permanently
								delete your account and remove your data from our
								servers.
							</DialogDescription>
						</DialogHeader>
					</DialogContent>
				</Dialog>
				<Dialog>
					<DialogTrigger className='text-left'>Sign up</DialogTrigger>
					<DialogContent>
						<DialogHeader>
							<h2 className='text-left mb-6 text-2xl tracking-wide font-medium text-zinc-600'>
								Sign up
							</h2>
							<DialogDescription>
								<RegistrationForm />
								<hr className='my-6' />
								<div>
									<p className='text-lg font-light'>
										Already have an account?{' '}
										<a href='' className='text-primary'>
											Log in
										</a>
									</p>
								</div>
							</DialogDescription>
						</DialogHeader>
					</DialogContent>
				</Dialog>
			</div>
		</motion.div>
	)
}

export default Sidebar
