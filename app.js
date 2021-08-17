const express = require('express')

const app = express()
app.use(express.json())

app.post('/', (req, res, next) => {
    const { name, email, message } = req.body

    console.log({name, email, message})
    res.status(200).json({
        statsu: 'success',
        message: "Form submitted"
    })
})

module.exports = app