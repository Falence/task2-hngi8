const Contact = require('./../models/contactModel')
const sendEmail = require('./../utility/email')

exports.createContact = async (req, res, next) => {
    try {
        const { name, email, message } = req.body

        // save in database
        const contact = await Contact.create({
            name,
            email,
            message
        })

        // send an email to notify me ----> I'll just use mailtrap for now

        await sendEmail({
            email,
            subject: 'New contact from your portfolio page',
            message
        })

        // console.log({name, email, message})
        res.status(200).json({
            status: 'success',
            message: "Form submitted",
            contact
        })
    } catch(err) {
        console.log(err)
        res.status(500).json({
            status: 'error',
            message: 'Something happened!'
        })
    }
}