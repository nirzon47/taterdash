import { jwtDecode } from 'jwt-decode'

export const verifyToken = () => {
	const token = localStorage.getItem('token') || ''

	if (!token) {
		return null
	}

	const decoded = jwtDecode(token)

	if (decoded.exp && decoded.exp * 1000 < Date.now()) {
		localStorage.removeItem('token')

		return null
	}

	return decoded
}
