import { DialogContent } from '@/components/ui/dialog'
import RegistrationForm from './RegistrationForm'

const RegistrationDialog = () => {
	return (
		<DialogContent>
			<h2 className='text-left mb-6 text-2xl tracking-wide font-medium text-zinc-600'>
				Sign up
			</h2>

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
		</DialogContent>
	)
}

export default RegistrationDialog
