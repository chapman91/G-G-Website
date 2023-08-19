const navLinkEls = document.querySelectorAll('.nav__link');
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
