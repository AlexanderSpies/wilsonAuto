const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
const port = 8080;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Allow CORS for development
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Handle form submission
app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;
    console.log(name, email, message);
    const mailOptions = {
        from: email,
        to: process.env.RECIPIENT_EMAIL,
        subject: 'Form Submission',
        text: `You have a new form submission from:
               Name: ${name}
               Email: ${email}
               Message: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({ success: false, message: 'Failed to send email', error: error.message });
        }
        res.status(200).json({ success: true, message: 'Email sent successfully', info });
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
