import { restaurantModel } from '../../models/restaurants'

export const addItem = async (req: any, res: any) => {
	try {
		const { restaurant } = req
		let { name, price, category } = req.body

		if (!name || !price) {
			return res
				.status(400)
				.json({ success: false, message: 'Name and price are required' })
		}

		if (!category) {
			category = 'default'
		}

		const item = await restaurantModel.findById(restaurant._id)

		const categoryIndex = item?.categories.findIndex(
			(cat: any) => cat.name === category
		)

		if (categoryIndex === -1) {
			item?.categories.push({ name: category, items: [{ name, price }] })
		} else {
			item?.categories[categoryIndex as any].items.push({ name, price })
		}

		await item?.save()

		res.status(200).json({
			success: true,
			message: 'Item added successfully',
			data: item,
		})
	} catch (error) {
		res.status(500).json({
			success: false,
			message: 'Error adding item',
		})
	}
}
