import {
	categoryModel,
	itemModel,
	restaurantModel,
} from '../../models/restaurants'

// Controller for adding item
export const addItem = async (req: any, res: any) => {
	try {
		let { name, price, category } = req.body
		const { restaurantId } = req.params

		// If restaurantId is not provided
		if (!restaurantId) {
			return res
				.status(400)
				.json({ success: false, message: 'Restaurant ID is required' })
		}

		// If name and price are not provided
		if (!name || !price) {
			return res
				.status(400)
				.json({ success: false, message: 'Name and price are required' })
		}

		// If category is not provided
		if (!category) {
			category = 'default'
		}

		// Get the restaurant
		const restaurant = await restaurantModel
			.findOne({ _id: restaurantId })
			.populate('categories categories.items')

		// If restaurant not found
		if (!restaurant) {
			return res.status(404).json({
				success: false,
				message: 'Restaurant not found',
			})
		}

		// Check if the category already exists
		const categoryExists = restaurant?.categories.find(
			(c: any) => c.name === category
		)

		let categoryId = categoryExists?._id

		// If the category doesn't exist, create a new one
		if (!categoryExists) {
			const newCategory = await categoryModel.create({
				name: category,
				items: [],
			})

			restaurant?.categories.push(newCategory._id)
			await restaurant?.save()
			categoryId = newCategory._id
		} else {
			// If the category exists, check if the item already exists
			const items = await categoryModel
				.findOne({
					_id: categoryId,
				})
				.populate('items')

			if (items?.items?.findIndex((i: any) => i.name === name) !== -1) {
				return res.status(400).json({
					success: false,
					message: 'Item already exists in the category',
				})
			}
		}

		// Create a new item
		const item = await itemModel.create({
			name,
			price,
			category: categoryId,
		})

		// Add the item to the category
		await categoryModel.findByIdAndUpdate(
			categoryId,
			{
				$push: { items: item._id },
			},
			{ new: true }
		)

		// Upon success, send the item
		res.status(201).json({
			success: true,
			item,
		})
	} catch (error: Error | any) {
		res.status(500).json({
			success: false,
			message: error.message || 'Error adding item',
		})
	}
}
