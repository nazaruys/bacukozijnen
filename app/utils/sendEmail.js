import nodemailer from 'nodemailer';

export async function sendEmail ({service, host, port, secure=true, from, from_email, from_password, to_email, subject, text}) {
    const transporter = nodemailer.createTransport({
        host: host,
        port: port,
        secure: secure,
        auth: {
            user: from_email,
            pass: from_password
        }
    });

    const mailOptions = {
        from: from,
        to: to_email,
        subject: subject,
        text: text
    };

    try {
        await transporter.sendMail(mailOptions);
        return { statusCode: 200, message: 'Email sent successfully' };
    } catch (error) {
        console.error('Failed to send email:', error);
        return { statusCode: 500, error: error };
    }
}

export default sendEmail;