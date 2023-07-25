// Import required modules
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

// Create an Express app use to configure server
const app = express();

// Configure middleware for handling form data
app.use(bodyParser.urlencoded({ extended: false }));

// Serve the static files (e.g., CSS, images) from a public directory
app.use(express.static('public'));

// Set up the route for the home page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
