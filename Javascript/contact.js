
// Responsible for the Pop up of the form when it is clicked on
// and for it to disappear and show the appearance of the thank you page


const btnPrimary = document.querySelector('.btn-primary');
const contactFormContainer = document.querySelector('.contact-form-container');
const thankYouPage = document.querySelector('.thank-you');

btnPrimary.addEventListener('click', function() {
  contactFormContainer.style.display = 'block';
  thankYouPage.style.display = 'none';
});



// Get a reference to the form and the thank you message div
const form = document.querySelector('#contact-form');
const thankYouMessage = document.querySelector('#thank');

// Add a submit event listener to the form
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  // Get the form data
  const formData = new FormData(form);

  // Send a POST request to the server with the form data
  try {
    const response = await fetch('http://localhost:3000/submit-form', {
      method: 'POST',
      body: formData,
    });

    // Check if the form was submitted successfully
    if (response.ok) {
      // Hide the form and show the thank you message
      form.style.display = 'none';
      thankYouMessage.style.display = 'block';
    } else {
      console.error('Error submitting form:', response.statusText);
    }
  } catch (error) {
    console.error('Error submitting form:', error);
  }
});
