import axios from 'axios'

export const login = async (email: string, password: string) => {
	const { data } = await axios.post(
		`${process.env.NEXT_PUBLIC_BASE_URL}/users/login`,
		{ email, password }
	)
}
