const express = require('express')
const viewRouter = require('./routes/viewRoutes')
const contactRouter = require('./routes/contactRoutes')

const app = express()
app.use(express.json())

app.use('/', viewRouter)
app.use('/api/contacts', contactRouter)

module.exports = app