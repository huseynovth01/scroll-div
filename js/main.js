
var container = document.querySelector(".container");

document.addEventListener('scroll', () => {
    container.style.transform = 'rotate(' + (window.scrollY % 360) + 'deg)';
});
