import { restaurantModel } from '../models/restaurants'

const restaurantName = async (req: any, res: any, _next: any) => {
	try {
		const { restaurantId } = req.params

		const restaurant = await restaurantModel.findOne({ _id: restaurantId })

		if (!restaurant) {
			return res.status(404).json({
				success: false,
				message: 'Restaurant not found',
			})
		}

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
