export const getItems = async (req: any, res: any) => {
	try {
		const { restaurant } = req

		res.status(200).json({
			success: true,
			message: 'Items retrieved successfully',
			items: restaurant.categories,
		})
	} catch (error) {
		res.status(500).json({
			success: false,
			message: 'Error getting items',
		})
	}
}
