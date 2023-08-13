// Paste the script that generates the navbar dynamically 

// Dynamically generates the navbar on web pages 
document.addEventListener('DOMContentLoaded', function () {
  // Define a function to handle errors
  const handleFetchError = (error) => {
    console.error('Error fetching navbar:', error);
  };

  // Fetch the content of navbar.html and insert it into the placeholder div
  fetch('../HTML/navbar.html')
    .then(response => {
      // Check if the response status is not OK (not in the 200-299 range)
      if (!response.ok) {
        // Throw an error with a descriptive message
        throw new Error(`Failed to fetch navbar: ${response.status} ${response.statusText}`);
      }
      // Return the response content as text
      return response.text();
    })
    .then(html => {
      // Insert the fetched HTML content into the placeholder div
      document.getElementById('navbar-placeholder').innerHTML = html;
    })
    .catch(handleFetchError); // Catch and handle any errors that occurred during the fetch process
});




/* sticky or fixed-position navigation bar when the user scrolls down the page */

document.addEventListener("DOMContentLoaded", function() {
  // Your "navbar.js" code goes here

  // Select element ID 'navbar' in the HTML DOM
  var navbar = document.getElementById('navbar');

  // Calculates current vertical position
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  // -----
  if (scrollPosition >= 100) {
    navbar.classList.add('sticky');
  } 
  else {
    navbar.classList.remove('sticky');
  }
});



// What is the aim of your code?

// Where is the navbar element located in navbar.html?

// 