import { Search } from 'lucide-react'

const SearchBar = () => {
	return (
		<div className='shadow-md hidden lg:flex rounded-lg items-center px-2'>
			<Search className='ml-2 text-slate-500' />
			<form>
				<input
					type='text'
					placeholder='Search for restaurant or cuisine'
					className='w-96 min-w-48 py-3 px-6 focus:outline-none rounded-tr-lg rounded-br-lg text-slate-800'
				/>
			</form>
		</div>
	)
}

export default SearchBar
