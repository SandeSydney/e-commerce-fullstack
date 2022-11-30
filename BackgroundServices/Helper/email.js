const dotenv = require('dotenv').config()
const nodemailer = require('nodemailer')

const mailOptions = {
    host: "smtp.google.com",
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
    }
}

function createTransporter(mailconfig) {
    const transporter = nodemailer.createTransport(mailconfig)
    return transporter
}

const sendEmail = async (messageOption) => {
    const transporter = createTransporter(mailOptions)
    await transporter.verify()
    await transporter.sendMail(messageOption)
}

module.exports = { sendEmail }