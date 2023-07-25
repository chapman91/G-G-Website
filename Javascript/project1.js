// Changes Yellow words on content section
const freeQuoteBtn = document.querySelector('.container-fluid .back .button .btn-primary');
freeQuoteBtn.addEventListener('click', function() {
  this.classList.toggle('active');
});


// Responsible for the Pop up of the form when it is clicked on
// and for it to disappear and show the appearance of the thank you page


  const btnPrimary = document.querySelector('.btn-primary');
  const contactFormContainer = document.querySelector('.contact-form-container');
  const thankYouPage = document.querySelector('.thank-you');

  btnPrimary.addEventListener('click', function() {
    contactFormContainer.style.display = 'block';
    thankYouPage.style.display = 'none';
  });

  // Assume you have a function to handle form submission
  function handleSubmit(event) {
    event.preventDefault();

    // Perform form submission and email communication using server-side processing
    // Note: This part requires server-side code and cannot be implemented in plain HTML/CSS/JS.
    // You would need a server-side language like PHP or Node.js to handle form submissions and send emails.
    
    // Once the form is successfully submitted, show the thank-you page
    contactFormContainer.style.display = 'none';
    thankYouPage.style.display = 'block';
  }

  const contactForm = document.querySelector('form');
  contactForm.addEventListener('submit', handleSubmit);



window.addEventListener('scroll', function() {
  var navbar = document.getElementById('navbar');
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollPosition >= 100) { // Adjust the value as per your requirement
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
});


// Your JavaScript code
const nameElement = document.getElementById("name");
const names = ["OFFICE", "HOUSE"]; // Array of names to cycle through
let currentIndex = 0; // Current index in the names array

// Function to change the name and apply the yellow color class
function changeNameAndColor() {
  nameElement.textContent = names[currentIndex]; // Change the name
  nameElement.classList.add("yellow"); // Apply the yellow color class
  currentIndex = (currentIndex + 1) % names.length; // Increment index or reset to 0
}

// Call the function repeatedly every 3 seconds
setInterval(changeNameAndColor, 3000); // Change the name and color every 3 seconds




