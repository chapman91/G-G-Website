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



// Navbar link turns bold on user scroll

/*
const navLinkEls = document.querySelectorAll('.nav-link');
const navLinkEls = document.querySelectorAll('.section');


let currentSection = 'home';
window.addEventListener('scroll', () => {
    sectionEls.foreach(sectionEl => {
        if(window.scrollY >= sectionEl.offsetTop )
        currentSection = sectionEl.id;
    })



    navLinkEls.forEach(navLinkEl => {
        if (navLinkEl.href.includes(currentSection))
        navLinkEl.classList.add('active');
    })
});
*/











// What is the aim of your code?

// Where is the navbar element located in navbar.html?

// 