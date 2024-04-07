import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import axios from 'axios'
import { ChevronDown } from 'lucide-react'
import { useToast } from '../ui/use-toast'

const DropdownComponent = ({ user }: { user: any }) => {
	const { toast } = useToast()
	const logoutUser = async () => {
		try {
			const authorization = `Bearer ${localStorage.getItem('token')}`

			await axios.post(
				`${process.env.NEXT_PUBLIC_BASE_URL}/users/logout`,
				null,
				{
					headers: {
						Authorization: authorization,
					},
				}
			)

			localStorage.removeItem('token')
			window.location.href = '/'
		} catch (error) {
			toast({
				title: 'Oops!',
				description: 'There seems to be an error logging out',
				variant: 'destructive',
				duration: 5000,
			})
		}
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger className='flex items-center'>
				<Avatar>
					<AvatarImage src={'/avatar.jpeg'} />
					<AvatarFallback>TD</AvatarFallback>
				</Avatar>
				<span className='mx-2 text-lg'>{user?.firstName}</span>
				<ChevronDown size={16} />
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuItem>Profile</DropdownMenuItem>
				<DropdownMenuItem>Notifications</DropdownMenuItem>
				<DropdownMenuItem>Bookmarks</DropdownMenuItem>
				<DropdownMenuItem>Reviews</DropdownMenuItem>
				<DropdownMenuItem>Network</DropdownMenuItem>
				<DropdownMenuItem>Find friends</DropdownMenuItem>
				<DropdownMenuItem>Settings</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem onClick={logoutUser}>Log out</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default DropdownComponent
