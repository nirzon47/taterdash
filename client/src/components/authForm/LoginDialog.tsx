import {
	DialogContent,
	DialogDescription,
	DialogHeader,
} from '@/components/ui/dialog'
import LoginForm from './LoginForm'

const LoginDialog = () => {
	return (
		<DialogContent>
			<h2 className='text-left mb-6 text-2xl tracking-wide font-medium text-zinc-600'>
				Log in
			</h2>

			<LoginForm />
			<hr className='my-6' />
			<div>
				<p className='text-lg font-light'>
					New to taterDash?{' '}
					<a href='' className='text-primary'>
						Sign up
					</a>
				</p>
			</div>
		</DialogContent>
	)
}

export default LoginDialog
