const toggle = document.querySelector('.menu_toggle');
const overlay = document.querySelector('.overlay');
const nav = document.querySelector('.main_nav');

let icon = document.querySelector('.menu_toggle i')
let changeIcon = true;

toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    overlay.classList.toggle('menu_open');

    if (changeIcon) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
        changeIcon = false;
    } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
        changeIcon = true;
    }
})