
// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#smooth__body'),
//     smooth: true
// });
var menuIcon = document.querySelector('menu__icon');

menuIcon.addEventListener('click', function () {
    menuIcon.classList.toggle('active');
});