'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useToast } from '../ui/use-toast'
import axios from 'axios'
import { useState } from 'react'
import Image from 'next/image'

// Zod validation
const formSchema = z.object({
	firstName: z.string().min(2, {
		message: 'First name must be at least 2 characters.',
	}),
	lastName: z.string().min(2, {
		message: 'First name must be at least 2 characters.',
	}),
	email: z.string().email({
		message: 'Must be an email.',
	}),
	password: z.string().min(8, {
		message: 'Password must be at least 8 characters.',
	}),
})

const RegistrationForm = () => {
	const { toast } = useToast()
	const [disabled, setDisabled] = useState<boolean>(false)

	// Form initialization
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
		},
	})

	// Form submission
	const handleSubmit = async (values: z.infer<typeof formSchema>) => {
		const { firstName, lastName, email, password } = values
		setDisabled(true)

		// Timeout for server spin message
		let timeout
		try {
			timeout = setTimeout(() => {
				toast({
					title: 'Server spinning up',
					description: 'Please wait while we sign you up',
					duration: 4000,
				})
			}, 3000)

			// Form submission
			await axios.post(
				`${process.env.NEXT_PUBLIC_BASE_URL}/users/register`,
				{
					firstName,
					lastName,
					email,
					password,
					role: 'user',
				}
			)

			// Clear timeout
			clearTimeout(timeout)

			// Show success toast
			toast({
				title: 'Success',
				description: 'Account created successfully',
				duration: 3000,
			})

			setTimeout(() => {
				window.location.reload()
			}, 3_500)
		} catch (error) {
			// Clear timeout
			clearTimeout(timeout)

			// Show error toast
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
				<div className='grid grid-cols-2 gap-2'>
					<FormField
						control={form.control}
						name='firstName'
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input placeholder='First name' {...field} />
								</FormControl>
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='lastName'
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input placeholder='Last name' {...field} />
								</FormControl>
							</FormItem>
						)}
					/>
				</div>
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

export default RegistrationForm
