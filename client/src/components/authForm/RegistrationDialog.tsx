import {
	DialogContent,
	DialogDescription,
	DialogHeader,
} from '@/components/ui/dialog'
import RegistrationForm from './RegistrationForm'

const RegistrationDialog = () => {
	return (
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
	)
}

export default RegistrationDialog
