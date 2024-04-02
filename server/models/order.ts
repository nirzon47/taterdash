import { Schema, model } from 'mongoose'

const orderSchema = new Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: 'users',
	},
	orders: [
		{
			items: [
				{
					item: {
						type: Schema.Types.ObjectId,
						ref: 'items',
					},
					quantity: Number,
				},
			],
			total: Number,
			address: {
				street: String,
				city: String,
				state: String,
				zip: String,
				country: String,
			},
			created: {
				type: Date,
				default: Date.now,
			},
			status: {
				type: String,
				default: 'pending',
			},
			paymentId: String,
		},
	],
})

export const orderModel = model('order', orderSchema)
