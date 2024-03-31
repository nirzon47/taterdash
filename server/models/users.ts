import { Schema, model } from 'mongoose'

const userSchema = new Schema({
	firstName: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	role: {
		type: String,
		required: true,
		default: 'user',
	},
	tokens: [String],
	address: {
		street: String,
		city: String,
		state: String,
		zip: Number,
		country: String,
	},
})

// Hash the password before saving
userSchema.pre('save', async function () {
	// Uses bun's password hashing function
	const hash = await Bun.password.hash(this.password)

	this.password = hash
})

// Check if password is valid
userSchema.methods.isValidPassword = function (password: string) {
	return Bun.password.verify(this.password, password)
}

export const userModel = model('user', userSchema)
