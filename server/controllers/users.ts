import { registerUser } from './users/registerUser'
import { loginUser } from './users/loginUser'
import { logoutUser } from './users/logoutUser'
import { addAddress } from './users/addAddress'
import { updateAddress } from './users/updateAddress'
import { getAddress } from './users/getAddress'

const userController = {
	registerUser,
	loginUser,
	logoutUser,
	addAddress,
	updateAddress,
	getAddress,
}

export default userController
