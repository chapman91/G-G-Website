// main.js
document.addEventListener('DOMContentLoaded', function () {
  // Fetch the content of navbar.html and insert it into the placeholder div
  fetch('../HTML/navbar.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('navbar-placeholder').innerHTML = html;
    });
});



// Changes Yellow words on content section
const freeQuoteBtn = document.querySelector('.container-fluid .back .button .btn-primary');
freeQuoteBtn.addEventListener('click', function () {
  this.classList.toggle('active');
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




// Select the elements with the unique "slide-in" class names
const elements = document.querySelectorAll('#slideInFromTop, #slideInFromBottom, #slideInFromLeft, #slideInFromRight, #slideInFromLeft2');

// Function to check if an element is in the viewport
function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to add the "from-*" class to elements visible in the viewport
function handleScroll() {
  elements.forEach((element) => {
    const slideDirection = element.id;
    if (isElementInViewport(element)) {
      element.classList.add(`from-${slideDirection}`);
    }
  });
}

// Attach the "handleScroll" function to the "scroll" event
window.addEventListener('scroll', handleScroll);

// Call the function once on page load to initialize the animations for visible elements
handleScroll();
