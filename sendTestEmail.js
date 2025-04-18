import nodemailer from 'nodemailer';

async function sendTestEmail() {
  console.log('running')
  const transporter = nodemailer.createTransport({
    service: 'Gmail', // Gmail service
    host: 'smtp.gmail.com', // Gmail SMTP host
    port: 465, // Port for SSL
    secure: true, // Using SSL
    auth: {
      user: 'more.fortnite.comp@gmail.com', // Your Gmail address
      pass: 'bppv ucuq ahic fmuk', // Your Gmail App password (NOT your regular Gmail password)
    },
  });

  const mailOptions = {
    from: 'more.fortnite.comp@gmail.com', // Sender's email address
    to: 'nazary.box@gmail.com', // Recipient's email address
    subject: 'Auth Nazar', // Email subject
    text: 'Hello, this email is a test!', // Email body
  };

  try {
    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.response);
  } catch (error) {
    console.error('Failed to send email:', error);
  }
}

// Run the test
sendTestEmail();
