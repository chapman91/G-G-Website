
/* sticky or fixed-position navigation bar when the user scrolls down the page */

document.addEventListener("DOMContentLoaded", function() {
  // Your "navbar.js" code goes here
  var navbar = document.getElementById('navbar');
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollPosition >= 100) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
});
