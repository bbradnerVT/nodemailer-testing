const nodemailer = require("nodemailer");

const fromEmail = "TestEmail@email.com"; // Change this to whoever the sender should be
const toEmail = "AnotherEmail@email.com"; // Change this to whoever the receiver should be

// Create a test account or replace with real credentials.
const transporter = nodemailer.createTransport({
   host: 'smtp.office365.com',
    port: 587,
    secure: false,
    auth: {
        //Provide Agnostic OAuth2 Authentication - https://nodemailer.com/smtp/oauth2
        type: "OAuth2",
        user: fromEmail,
        clientId: "clientId", //Change this
        clientSecret: "clientSecret", //Change this
        refreshToken: "refreshToken" //Change this
    }
});

(async () => {
    const info = await transporter.sendMail({
        from: `"From Email" <${fromEmail}>`,
        to: toEmail,
        subject: "Nodemailer Testing",
        text: "This is just a test",
        html: "<b>This is just a test</b>",
    });
    console.log("Message sent:", info);
})();