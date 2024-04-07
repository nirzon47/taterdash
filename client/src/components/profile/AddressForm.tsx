import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useCallback, useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { useToast } from '../ui/use-toast'

const formSchema = z.object({
	city: z.string(),
	country: z.string(),
	district: z.string(),
	state: z.string(),
	street: z.string(),
	zip: z.string(),
})

const AddressForm = ({
	showButton,
	disabled,
}: {
	showButton?: boolean
	disabled?: boolean
}) => {
	const [address, setAddress] = useState<any>({})
	const [hasAddress, setHasAddress] = useState<boolean>(true)
	const { toast } = useToast()

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),

		defaultValues: {
			city: address?.city || '',
			country: address?.country || '',
			state: address?.state || '',
			street: address?.street || '',
			zip: address?.zip || '',
		},
	})

	const getAddress = useCallback(async () => {
		try {
			const { data } = await axios.get(
				`${process.env.NEXT_PUBLIC_BASE_URL}/users/address`,
				{
					headers: {
						Authorization: `Bearer ${localStorage.getItem('token')}`,
					},
				}
			)

			if (!data.success) {
				setHasAddress(false)
			}

			form.reset(data.address)
			setAddress(data.address)
		} catch (error: Error | any) {
			toast({
				title: 'Oops!',
				description: error.response.data.message,
				variant: 'destructive',
			})
		}
	}, [toast, form])

	useEffect(() => {
		getAddress()
	}, [getAddress])

	const handleAddressChange = async (e: any) => {
		e.preventDefault()

		const formData: any = form.getValues()
		for (const key in formData) {
			if (formData[key] === '') {
				toast({
					title: 'Oops!',
					description: `${key} cannot be empty`,
					variant: 'destructive',
				})
				return
			}
		}

		try {
			await axios.post(
				process.env.NEXT_PUBLIC_BASE_URL + '/users/address',
				form.getValues(),
				{
					headers: {
						Authorization: `Bearer ${localStorage.getItem('token')}`,
					},
				}
			)

			if (hasAddress) {
				toast({
					title: 'Success!',
					description: 'Address updated successfully',
				})
			} else {
				toast({
					title: 'Success!',
					description: 'Address added successfully',
				})
			}
		} catch (error: Error | any) {
			toast({
				title: 'Oops!',
				description: error.response.data.message,
				variant: 'destructive',
			})
		}
	}

	return (
		<section>
			<Form {...form}>
				{!hasAddress && (
					<p className='mb-4'>
						Oops, you don&apos;t have an address saved. Now is a great
						time to add one!
					</p>
				)}

				<form className='flex flex-col items-center space-y-4 my-16'>
					<div className='flex gap-4'>
						<FormField
							control={form.control}
							name='street'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Street</FormLabel>
									<FormControl>
										<Input
											disabled={disabled}
											placeholder='Enter street name'
											{...field}
										/>
									</FormControl>
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='city'
							render={({ field }) => (
								<FormItem>
									<FormLabel>City</FormLabel>
									<FormControl>
										<Input
											disabled={disabled}
											placeholder='Enter city name'
											{...field}
										/>
									</FormControl>
								</FormItem>
							)}
						/>
					</div>

					<div className='flex gap-4'>
						<FormField
							control={form.control}
							name='state'
							render={({ field }) => (
								<FormItem>
									<FormLabel>State</FormLabel>
									<FormControl>
										<Input
											disabled={disabled}
											placeholder='Enter state name'
											{...field}
										/>
									</FormControl>
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='country'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Country</FormLabel>
									<FormControl>
										<Input
											disabled={disabled}
											placeholder='Enter country name'
											{...field}
										/>
									</FormControl>
								</FormItem>
							)}
						/>
					</div>
					<div className='flex gap-4'>
						<FormField
							control={form.control}
							name='zip'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Zip code</FormLabel>
									<FormControl>
										<Input
											disabled={disabled}
											placeholder='Enter zip code'
											{...field}
										/>
									</FormControl>
								</FormItem>
							)}
						/>
					</div>
					{showButton && (
						<Button type='submit' onClick={handleAddressChange}>
							{!hasAddress ? 'Add Address' : 'Update Address'}
						</Button>
					)}
				</form>
			</Form>
		</section>
	)
}

export default AddressForm
