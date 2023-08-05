const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/submit-form', (req, res) => {
  const formData = req.body;

  // Check for required form fields
  if (!formData.name || !formData.email || !formData.message) {
    return res.status(400).send('Name, email, and message are required.');
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'gngpressurewashingllc1@gmail.com',
      pass: 'AkeinoGraham1!',
    },
  });

  const mailOptions = {
    from: 'gngpressurewashingllc1@gmail.com',
    to: 'recipient_email_address', // Replace with the recipient's email address
    replyTo: formData.email, // User's email address from the form (reply-to address)
    subject: 'Contact Form Submission',
    text: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent:', info.response);
      res.send('Form submitted successfully');
    }
  });
});

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});




//Concepts 
//Route handler 
//req.body
//middleware
//

//Handling Form Submissions and Email Communication 

