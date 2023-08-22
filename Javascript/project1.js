

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
// qxeenolight was here :p -->added and changed ids to selector list below
const elements = document.querySelectorAll('#top, #bottom, #bottom2, #left, #right, #left2');

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

document.addEventListener("DOMContentLoaded", function() {
  // Select the form element
  const form = document.querySelector(".form");

  // Add an event listener for form submission
  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the form data
    const formData = new FormData(form);

    // Convert the form data into an object
    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });

    // Convert the form data object to JSON
    const formDataJSON = JSON.stringify(formDataObject);

    // Send the form data to Formspark using fetch API
    fetch("https://submit-form.com/vxI1ClpG", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: formDataJSON,
    })
    .then(response => response.json())
    .then(data => {
      console.log("Form submission successful:", data);
      // You can display a success message to the user or perform any other action here
      // For example, show a thank you message or clear the form fields
      form.reset();
    })
    .catch(error => {
      console.error("Form submission error:", error);
      // You can display an error message to the user if the submission fails
    });
  });
});
;

