import { Schema, model } from 'mongoose'

const itemSchema = new Schema({
	category: {
		type: Schema.Types.ObjectId,
		ref: 'categories',
	},
	name: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
})

const categorySchema = new Schema({
	restaurantId: {
		type: Schema.Types.ObjectId,
		ref: 'restaurants',
	},
	name: {
		type: String,
		required: true,
	},
	items: [
		{
			type: Schema.Types.ObjectId,
			ref: 'items',
		},
	],
})

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
			type: Schema.Types.ObjectId,
			ref: 'categories',
		},
	],
	createdAt: {
		type: Date,
		default: Date.now,
	},
})

export const restaurantModel = model('restaurants', restaurantSchema)
export const categoryModel = model('categories', categorySchema)
export const itemModel = model('items', itemSchema)
