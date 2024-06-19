const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const { join } = require('path')
const fs = require('fs')
require('dotenv').config();
const { Telegraf } = require('telegraf');

const app = express();

app.use(cors());
app.use(express.json());

const telegramBot = new Telegraf('put_token_here')
const LeadsChatId = '-111111111111'

const transporter = nodemailer.createTransport({
    host: process.env.HOST,
    port: process.env.PORT,
    secure: true,
    auth: {
        user: process.env.USER,
        pass: process.env.PASS,
    },
});

const publicPath = join(__dirname, 'build/');
console.log(publicPath)
app.use(express.static(publicPath));


app.get('/', (req, res) => {
    res.send(
        fs.readFileSync(
            join(__dirname, 'build', 'index.html')
        , 'utf-8')
    );
})

app.post("/api/quiz-leave-contacts", (req, res) => {
    const { productName, howFast, arranges, email } = req.body

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
            <h2>Новая заявка с квиза!</h2>
            <p><strong>Название продукта:</strong> ${productName}</p>
            <p><strong>Срочность:</strong> ${howFast}</p>
            <p><strong>Согласие на минимальную партию 5000$:</strong> ${arranges}</p>
            <p><strong>Почта:</strong> ${email}</p>
        </div>
    </body>
    </html>
`;
    const mailOptions = {
        from: '"Новая заявка с квиза!" n.socialmedia12@gmail.com',
        to: process.env.RECEIVER,
        subject: 'Новая заявка с квиза!',
        html: styledEmailContent
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ error: 'Failed to send email' });
        } else {
            res.status(200).json({ message: 'Email sent successfully' });
        }
    });

    telegramBot.telegram.sendMessage(LeadsChatId, `Новая заявка с квиза!

Название продукта: ${productName}
Срочность: ${howFast}
Согласие на минимальную партию 5000$: ${arranges}
Почта: ${email}`)
})


app.post("/api/feedback-modal", (req, res) => {
    const { phone, name, email } = req.body
    const emailSection = email ? `<p><strong>Почта:</strong> ${email}</p>` : `<p>Почты нет</p>`;

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
            ${emailSection}
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
            res.status(500).json({ error: 'Failed to send email' });
        } else {
            res.status(200).json({ message: 'Email sent successfully' });
        }
    });

    telegramBot.telegram.sendMessage(LeadsChatId, `Новая заявка на консультацию!

Имя: ${name}
Телефон: ${phone}
E-MAIL: ${email ? email :"Отсутствует."}`)
});

app.post("/api/leave-contacts-modal", (req, res) => {
    const { email, phone, name } = req.body

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
            res.status(500).json({ error: 'Failed to send email' });
        } else {
            res.status(200).json({ message: 'Email sent successfully' });
        }
    });

    telegramBot.telegram.sendMessage(LeadsChatId, `Новая заявка на консультацию!

Имя: ${name}
Телефон: ${phone}
E-MAIL: ${email ? email :"Отсутствует."}`)
})



const port = 80;
app.listen(port, () => console.log(`Server running on port ${port}`));