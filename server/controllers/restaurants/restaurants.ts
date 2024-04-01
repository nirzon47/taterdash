import { addRestaurant } from './addRestaurant'
import { getRestaurants } from './getRestaurants'
import { editRestaurant } from './editRestaurant'
import { deleteRestaurant } from './deleteRestaurant'

import { addItem } from './addItem'
import { editImage } from './editImage'

const restaurantController = {
	addRestaurant,
	getRestaurants,
	editRestaurant,
	deleteRestaurant,
	addItem,
	editImage,
}

export default restaurantController
