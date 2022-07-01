const nodemailer = require("nodemailer");
require('dotenv').config();

const transporter = nodemailer.createTransport({
    post: 465,
    host: "smtp.mail.ru",
    auth: {
        user: process.env.SMTP_USER_EMAIL,
        pass: process.env.SMTP_PASSWORD
    },
    secure: true
})

const mailData = {
    from: "business_konstantin-photo@mail.ru",
    to: "business_konstantin-photo@mail.ru",
    subject: "Sending email using Node.js",
    text: "That was really easy",
    html: '<b>Hey there!</b><br> This is our first message sent with Nodemailer<br/>',
    attachments: [
        // {
        //     filename: 'text notes.txt',
        //     path: 'notes.txt
        // } 
    ]
}

transporter.sendMail(mailData, function(error, info) {
    if(error) console.log(error);
    else console.log(info)
})

module.exports = transporter;