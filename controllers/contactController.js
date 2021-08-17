exports.createContact = (req, res, next) => {
    try {
        const { name, email, message } = req.body

        const contact = 

        console.log({name, email, message})
        res.status(200).json({
            status: 'success',
            message: "Form submitted"
        })
    } catch(err) {
        console.log(err)
        res.status(500).json({
            status: 'error',
            message: ''
        })
    }
}