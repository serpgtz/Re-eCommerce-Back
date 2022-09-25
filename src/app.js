const express = require('express')
const morgan = require('morgan')
const routes = require('./routes/index')
const app = express()


app.use(morgan('dev'))
app.use(express.json())
app.use(routes)


module.exports = app