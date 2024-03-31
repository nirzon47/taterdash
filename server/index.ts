import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import morgan from 'morgan'
import { usersRouter } from './routes/users'

const PORT = process.env.PORT || 10000
const app = express()

// MongoDB Connection
mongoose
	.connect(process.env.MONGO_URI as string)
	.then(() => console.log('Connected to MongoDB'))
	.catch(() => console.log('Failed to connect to MongoDB'))

// Middlewares
app.use(express.json()) // for parsing application/json
app.use(cors()) // for allowing cross-origin requests
app.use(morgan(':method | Endpoint - :url | :date[web] | :response-time ms')) // for logging

// Routes
app.use('/api/v1/users', usersRouter)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
