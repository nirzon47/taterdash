import { registerUser } from './registerUser'
import { loginUser } from './loginUser'
import { logoutUser } from './logoutUser'
import { addAddress } from './addAddress'
import { updateAddress } from './updateAddress'
import { getAddress } from './getAddress'

const userController = {
	registerUser,
	loginUser,
	logoutUser,
	addAddress,
	updateAddress,
	getAddress,
}

export default userController
