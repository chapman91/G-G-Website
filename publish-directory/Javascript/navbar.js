// Dynamically generates the navbar on web pages 

document.addEventListener('DOMContentLoaded', function () {
  // Define a function to handle errors
  const handleFetchError = (error) => {
    console.error('Error fetching navbar:', error);
  };

  // Fetch the content of navbar.html and insert it into the placeholder div
  fetch('/publish-directory/HTML/navbar.html')
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


//Under what condition would this code execute 

// Wait for the document to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Determine the base path
  const basePath = window.location.href.split('/').slice(0, -1).join('/');

  // Generate the image path
  const imagePath = `${basePath}/publish-directory/images/bzzcsbvn.jpg`;

  // Create an image element
  const navbarImage = document.getElementById('logoImage');
  navbarImage.src = imagePath;
});





//Navbar links turn bold based on the user's scroll position

 document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll("section"); //selects all elements by <section> tag in the DOM
  const navbarLinks = document.querySelectorAll(".navbar-nav a"); 

  function setActiveLink(index) {
      navbarLinks.forEach(link => link.classList.remove("active"));
      navbarLinks[index].classList.add("active");
  }

  window.addEventListener("scroll", function() {

    //store ID of the section in view 
      let current = "";

    
      sections.forEach(section => {
          const sectionTop = section.offsetTop - 100; // Adjust offset as needed
          const sectionHeight = section.clientHeight;
          if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
              current = section.getAttribute("id");
          }
      });

      //Loop through each navbar link to apply the "active" class to the correct link
      navbarLinks.forEach((link, index) => {
          link.getAttribute("href") === `#${current}`
              ? setActiveLink(index)
              : link.classList.remove("active");
      });
  });
});







