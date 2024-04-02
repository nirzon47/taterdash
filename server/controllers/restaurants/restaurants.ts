import { addRestaurant } from './addRestaurant'
import { getRestaurants } from './getRestaurants'
import { getRestaurantDetails } from './getRestaurantDetails'
import { editRestaurant } from './editRestaurant'
import { editRestaurantImage } from './editRestaurantImage'
import { deleteRestaurant } from './deleteRestaurant'

// import { addItem } from './addItem'
// import { getItems } from './getItems'
// import { editItem } from './editItem'
// import { deleteItem } from './deleteItem'

const restaurantController = {
	addRestaurant,
	getRestaurants,
	getRestaurantDetails,
	editRestaurant,
	editRestaurantImage,
	deleteRestaurant,
	// addItem,
	// getItems,
	// editItem,
	// deleteItem,
}

export default restaurantController
