import { Schema, model } from 'mongoose'

const cartSchema = new Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: 'users',
	},
	restaurant: {
		type: Schema.Types.ObjectId,
		ref: 'restaurants',
	},
	items: [
		{
			item: {
				type: Schema.Types.ObjectId,
				ref: 'items',
			},
			quantity: Number,
		},
	],
})

export const cartModel = model('cart', cartSchema)
