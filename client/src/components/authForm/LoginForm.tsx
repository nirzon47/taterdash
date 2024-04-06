'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import axios from 'axios'
import { useToast } from '../ui/use-toast'
import { useState } from 'react'
import Image from 'next/image'

// Zod validation
const formSchema = z.object({
	email: z.string().email({
		message: 'Must be an email.',
	}),
	password: z.string().min(8, {
		message: 'Password must be at least 8 characters.',
	}),
})

const LoginForm = () => {
	const { toast } = useToast()
	const [disabled, setDisabled] = useState<boolean>(false)

	// Form initialization
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	})

	// Form submission
	const handleSubmit = async (values: z.infer<typeof formSchema>) => {
		const { email, password } = values

		// Timeout for server spin message
		let timeout
		setDisabled(true)
		try {
			timeout = setTimeout(() => {
				toast({
					title: 'Server spinning up',
					description: 'Please wait while we log you in',
					duration: 4000,
				})
			}, 3000)

			// Form submission
			const { data } = await axios.post(
				`${process.env.NEXT_PUBLIC_BASE_URL}/users/login`,
				{
					email,
					password,
				}
			)

			// Clear timeout
			clearTimeout(timeout)

			// Store token in local storage
			localStorage.setItem('token', data.token)
			// Reload page
			window.location.reload()
		} catch (error) {
			// Clear timeout
			clearTimeout(timeout)

			// Show error
			toast({
				title: 'Error',
				description: 'Invalid email or password',
				duration: 2000,
				variant: 'destructive',
			})
		} finally {
			setDisabled(false)
		}
	}

	return (
		<Form {...form}>
			<form
				className='grid gap-4'
				onSubmit={form.handleSubmit(handleSubmit)}
			>
				<FormField
					control={form.control}
					name='email'
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input placeholder='Email' {...field} />
							</FormControl>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='password'
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input
									placeholder='Password'
									type='password'
									{...field}
								/>
							</FormControl>
						</FormItem>
					)}
				/>
				{disabled && (
					<div className='flex justify-center items-center'>
						<Image
							src='/loader.svg'
							alt='spinner'
							width={32}
							height={32}
						/>
					</div>
				)}
				<Button type='submit' disabled={disabled}>
					Submit
				</Button>
			</form>
		</Form>
	)
}

export default LoginForm
