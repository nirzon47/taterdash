import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ChevronDown } from 'lucide-react'

const DropdownComponent = ({ user }: { user: any }) => {
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
				<DropdownMenuItem>Log out</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default DropdownComponent
