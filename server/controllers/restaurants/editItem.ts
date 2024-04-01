import { restaurantModel } from '../../models/restaurants'

export const editItem = async (req: any, res: any) => {
	try {
		const { restaurant } = req

		let { name, price, category, newName, newPrice } = req.body

		// If name or price is missing, return an error
		if (!name || !price) {
			return res.status(400).json({
				success: false,
				message: 'Name and price are required to edit item',
			})
		}

		// If category is missing, set it to 'default'
		if (!category) {
			category = 'default'
		}

		// Finds the category index
		const categoryIndex = restaurant.categories.findIndex(
			(item: any) => item.name === category
		)

		// If category is not found, return an error
		if (categoryIndex === -1) {
			return res.status(400).json({
				success: false,
				message: 'Item not found',
			})
		}

		// Finds the item index
		const itemIndex = restaurant.categories[categoryIndex].items.findIndex(
			(item: any) => item.name === name && item.price === Number(price)
		)

		// If item is not found, return an error
		if (itemIndex === -1) {
			return res.status(400).json({
				success: false,
				message: 'Item not found',
			})
		}

		// If newName or newPrice is missing, set it to name and price
		if (!newName) {
			newName = name
		}
		if (!newPrice) {
			newPrice = price
		}

		// Edits the item
		restaurant.categories[categoryIndex].items[itemIndex].name = newName
		restaurant.categories[categoryIndex].items[itemIndex].price = newPrice

		// Updates the restaurant
		const updatedRestaurant = await restaurantModel.findByIdAndUpdate(
			restaurant._id,
			{ categories: restaurant.categories },
			{ new: true }
		)

		// Returns the updated restaurant
		res.status(200).json({
			success: true,
			message: 'Item edited successfully',
			data: updatedRestaurant?.categories,
		})
	} catch (error: any) {
		res.status(500).json({
			success: false,
			message: error.message || 'Error editing item',
		})
	}
}
