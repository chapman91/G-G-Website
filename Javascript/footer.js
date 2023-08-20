// footer.js
fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        document.querySelector('#footer-container').innerHTML = data;
    });
