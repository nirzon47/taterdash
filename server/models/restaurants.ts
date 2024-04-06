import { Schema, model } from 'mongoose'

/// Schema for the items
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

/// Schema for the categories
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

/// Schema for the restaurants
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
	rating: {
		type: Number,
	},
	deliveryTimeInMinutes: {
		type: Number,
	},
})

export const restaurantModel = model('restaurants', restaurantSchema)
export const categoryModel = model('categories', categorySchema)
export const itemModel = model('items', itemSchema)
