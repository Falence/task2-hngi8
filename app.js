const express = require('express')

const app = express()
app.use(express.json())

app.post('/', (req, res, next) => {
    const { name, email, message } = req.body

    console.log(name, email, message)
    res.status(200).json({
        statsu: 'success',
        message: "Form submitted"
    })
})

const PORT = 5000
app.listen(PORT, () => {
    console.log(`App running on port: ${PORT}...`)
})