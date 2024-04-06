import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import morgan from 'morgan'
import { usersRouter } from './routes/users'
import { restaurantsRouter } from './routes/restaurants'
import { itemRouter } from './routes/item'
import { cartRouter } from './routes/cart'
import { orderRouter } from './routes/order'

import { join } from 'path'
import { fileURLToPath } from 'url'
const __dirname = fileURLToPath(new URL('.', import.meta.url))

const PORT = process.env.PORT || 10000
const app = express()

// MongoDB Connection
mongoose
	.connect(process.env.MONGO_URI as string, {
		dbName: 'taterdash',
	})
	.then(() => console.log('Connected to MongoDB'))
	.catch(() => console.log('Failed to connect to MongoDB'))

// Middlewares
app.use(express.json()) // for parsing application/json
app.use(cors()) // for allowing cross-origin requests
app.use(morgan(':method | Endpoint - :url | :date[web] | :response-time ms')) // for logging4
app.use('/uploads', express.static(join(__dirname, 'uploads'))) // Serve static files

// Routes
app.use('/api/v1/users', usersRouter)
app.use('/api/v1/restaurant', restaurantsRouter)
app.use('/api/v1/item', itemRouter)
app.use('/api/v1/cart', cartRouter)
app.use('/api/v1/checkout', orderRouter)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
