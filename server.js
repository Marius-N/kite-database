const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv/config')

app.use(bodyParser.json())

var corsOptions = {
	'Access-Control-Allow-Origin': 'http://localhost:8080',
	'Access-Control-Allow-Methods': 'GET, PUT, POST',
	'Access-Control-Allow-Headers': 'Content-Type',
	'Access-Control-Request-Method': 'PUT', 
}

app.use(cors(corsOptions))

// Import routes
const loginRoutes = require('./routes/login')
const saveMarkersRoute = require('./routes/save-marker')
const signUpRoutes = require('./routes/signup')

app.use('/login', loginRoutes)
app.use('/save', saveMarkersRoute)
app.use('/signup', signUpRoutes)

// Connect to db
mongoose.connect(
	process.env.CONNECTION,
	{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
	() => {
		console.log('Connected successfully to the MongoDB server')
	}
)

// Listen to server
app.listen(8081)
