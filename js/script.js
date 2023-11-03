
// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#smooth__body'),
//     smooth: true
// });
var menuIcon = document.querySelector('.menu__icon'); // Add a period before class name
var dropSection = document.querySelector('.drop__section'); // Add a period before class name

menuIcon.addEventListener("click", () => {
    dropSection.classList.add('active__drop__section');
});

// var menuCloseIcon = document.querySelector('.menu__icon'); // Add a period before class name
// var dropSection = document.querySelector('.drop__section'); // Add a period before class name

// menuIcon.addEventListener("click", () => {
//     dropSection.classList.remove('active__drop__section');
// });
