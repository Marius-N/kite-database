const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bodyParser = require('body-parser')
require('dotenv/config')

app.use(bodyParser.json())

// Import routes
const loginRoutes = require('./routes/login')

app.use('/login', loginRoutes)


// Connect to db
mongoose.connect(
	process.env.CONNECTION,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	() => {
		console.log('Connected successfully to the MongoDB server')
	}
)

// Listen to server
app.listen(8081)
