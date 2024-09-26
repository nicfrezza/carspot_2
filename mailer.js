const nodemailer = require('nodemailer');

// Crie um transporte reutilizável usando o serviço de e-mail de sua escolha
const transporter = nodemailer.createTransport({
    service: 'gmail', // ou qualquer outro serviço de e-mail
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

const sendMail = (to, subject, text) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to,
        subject,
        text
    };

    return transporter.sendMail(mailOptions);
};

module.exports = sendMail;
