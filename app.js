const path = require('path')
const express = require('express')
const compression = require('compression')

const viewRouter = require('./routes/viewRoutes')
const contactRouter = require('./routes/contactRoutes')

const app = express()

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

// GLOBAL MIDDLEWARES
app.use(express.json())
app.use(compression())

// serve static files
app.use(express.static(path.join(__dirname, 'public')))


// Routes
app.use('/', viewRouter)
app.use('/api/contacts', contactRouter)

module.exports = app