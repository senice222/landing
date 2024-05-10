const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
    host: process.env.HOST,
    port: process.env.PORT,
    secure: true,
    auth: {
        user: process.env.USER,
        pass: process.env.PASS,
    },
});


app.post("/api/feedback-modal", (req, res) => {
    const {phone, name, messenger} = req.body

    const styledEmailContent = `
    <html>
    <head>
         <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
      rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
      rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap"
      rel="stylesheet">
        <style>
            body {
                font-family: 'Inter', sans-serif;
                text-align: center;
            }
            h2 {
                color: #333;
                font-size: 22px;
            }
            p {
                color: #666;
                margin-bottom: 10px;
                font-size: 18px;
            }
            strong {
                font-weight: bold;
                font-size: 18px;
            }
        </style>
    </head>
    <body>
        <div>
            <h2>Новая заявка на консультацию!</h2>
            <p><strong>Имя:</strong> ${name}</p>
            <p><strong>Телефон:</strong> ${phone}</p>
            <p><strong>Мессенджер:</strong> ${messenger}</p>
        </div>
    </body>
    </html>
`;
    const mailOptions = {
        from: '"Новая заявка на консультацию!" n.socialmedia12@gmail.com',
        to: process.env.RECEIVER,
        subject: 'Новая заявка на консультацию',
        html: styledEmailContent
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).json({error: 'Failed to send email'});
        } else {
            res.status(200).json({message: 'Email sent successfully'});
        }
    });
});

app.post("/api/leave-contacts-modal", (req, res) => {
    const {email, phone, name, messenger} = req.body

    const styledEmailContent = `
    <html>
    <head>
         <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
      rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
      rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap"
      rel="stylesheet">
        <style>
            body {
                font-family: 'Inter', sans-serif;
                text-align: center;
            }
            h2 {
                color: #333;
                font-size: 22px;
            }
            p {
                color: #666;
                margin-bottom: 10px;
                font-size: 18px;
            }
            strong {
                font-weight: bold;
                font-size: 18px;
            }
        </style>
    </head>
    <body>
        <div>
            <h2>Новая заявка на консультацию!</h2>
            <p><strong>Имя:</strong> ${name}</p>
            <p><strong>Почта:</strong> ${email}</p>
            <p><strong>Телефон:</strong> ${phone}</p>
            <p><strong>Мессенджер:</strong> ${messenger}</p>
        </div>
    </body>
    </html>
`;
    const mailOptions = {
        from: '"Новая заявка на консультацию!" n.socialmedia12@gmail.com',
        to: process.env.RECEIVER,
        subject: 'Новая заявка на консультацию',
        html: styledEmailContent
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).json({error: 'Failed to send email'});
        } else {
            res.status(200).json({message: 'Email sent successfully'});
        }
    });
})



const port = 3030;
app.listen(port, () => console.log(`Server running on port ${port}`));