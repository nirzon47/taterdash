import { addRestaurant } from './addRestaurant'
import { getRestaurants } from './getRestaurants'
import { editRestaurant } from './editRestaurant'
import { editImage } from './editImage'
import { deleteRestaurant } from './deleteRestaurant'

import { addItem } from './addItem'
import { getItems } from './getItems'
import { editItem } from './editItem'
import { deleteItem } from './deleteItem'

const restaurantController = {
	addRestaurant,
	getRestaurants,
	editRestaurant,
	editImage,
	deleteRestaurant,
	addItem,
	getItems,
	editItem,
	deleteItem,
}

export default restaurantController
