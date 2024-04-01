import { restaurantModel } from '../models/restaurants'

const restaurantName = async (req: any, res: any, _next: any) => {
	try {
		const { restaurantId } = req.params

		const restaurant = await restaurantModel.findOne({ _id: restaurantId })

		req.restaurant = restaurant

		_next()
	} catch (error) {
		res.status(500).json({
			success: false,
			message: 'Error getting restaurant name',
		})
	}
}

export default restaurantName
