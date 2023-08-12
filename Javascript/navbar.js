
/* sticky or fixed-position navigation bar when the user scrolls down the page */

document.addEventListener("DOMContentLoaded", function() {
  // Your "navbar.js" code goes here

  // Select element ID 'navbar' in the HTML DOM
  var navbar = document.getElementById('navbar');

  // Calculates current vertical position
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  //  
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