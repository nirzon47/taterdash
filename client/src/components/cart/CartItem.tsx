import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { useToast } from '../ui/use-toast'
import axios from 'axios'
import { Trash2 } from 'lucide-react'

const CartItem = ({ item }: { item: any }) => {
	const { toast } = useToast()

	const changeQuantity = async (e: any) => {
		try {
			const { data } = await axios.patch(
				`${process.env.NEXT_PUBLIC_BASE_URL}/cart/`,
				{
					itemId: item.item._id,
					quantity: e,
				},
				{
					headers: {
						Authorization: `Bearer ${localStorage.getItem('token')}`,
					},
				}
			)
		} catch (error: any) {
			toast({
				title: 'Oops!',
				description: error.response.data.message,
				variant: 'destructive',
			})
		}
	}

	const removeFromCart = async () => {
		try {
			const { data } = await axios.delete(
				`${process.env.NEXT_PUBLIC_BASE_URL}/cart/`,
				{
					headers: {
						Authorization: `Bearer ${localStorage.getItem('token')}`,
					},
					data: {
						itemId: item.item._id,
					},
				}
			)
		} catch (error: any) {
			toast({
				title: 'Oops!',
				description: error.response.data.message,
				variant: 'destructive',
			})
		}
	}

	return (
		<div className='flex justify-between'>
			<h2 className='text-xl font-light w-96'>{item.item.name}</h2>
			<div className='flex gap-4 items-center'>
				<Select onValueChange={changeQuantity}>
					<SelectTrigger className='w-24'>
						<SelectValue placeholder={item.quantity} />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value='1'>1</SelectItem>
						<SelectItem value='2'>2</SelectItem>
						<SelectItem value='3'>3</SelectItem>
						<SelectItem value='4'>4</SelectItem>
						<SelectItem value='5'>5</SelectItem>
					</SelectContent>
				</Select>
				<div className='w-12'>
					<Trash2
						color='red'
						className='cursor-pointer'
						onClick={removeFromCart}
					/>
				</div>
			</div>
			<p>₹{item.item.price * item.quantity}</p>
		</div>
	)
}

export default CartItem
