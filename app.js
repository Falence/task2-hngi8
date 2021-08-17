const express = require('express')
const viewRouter = require('./routes/viewRoutes')
const contactRouter = require('./routes/contactRoutes')

const app = express()

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

// GLOBAL MIDDLEWARES
app.use(express.json())

// serve static files
app.use(express.static(path.join(__dirname, 'public')))


// Routes
app.use('/', viewRouter)
app.use('/api/contacts', contactRouter)

module.exports = app