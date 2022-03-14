// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navBtn = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".links");

const navToggle = () => {
    if (navLinks.classList.contains("show-links") ? navLinks.classList.remove("show-links") : navLinks.classList.add("show-links"));
}

const windowResize = () => {
    if (window.innerWidth > 800) navLinks.classList.remove("show-links");
}

navBtn.addEventListener('click', () => {
    //navLinks.classList.toggle("show-links");
    navToggle();

});

window.addEventListener('resize', windowResize);



