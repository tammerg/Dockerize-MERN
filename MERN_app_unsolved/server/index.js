const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')
const movieRouter = require('./routes/movie-router')

const app = express()
const apiPort = process.env.PORT || 5000

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.options('*', cors());
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.use('/api', require('cors')());
app.use('/api', movieRouter);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))