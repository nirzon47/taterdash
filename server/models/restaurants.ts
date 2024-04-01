import { Schema, model } from 'mongoose'

const restaurantSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	cuisine: {
		type: [String],
		required: true,
	},
	imagePath: {
		type: String,
		default: 'uploads/default.png',
	},
	categories: [
		{
			name: {
				type: String,
			},
			items: [
				{
					name: {
						type: String,
					},
					price: {
						type: Number,
					},
				},
			],
		},
	],
	createdAt: {
		type: Date,
		default: Date.now,
	},
})

export const restaurantModel = model('restaurants', restaurantSchema)
