const menu = document.querySelector('.menu-btn');
const mainMenu = document.querySelector('.main-menu');

function handleShow() {
    mainMenu.classList.toggle('show');
}

menu.addEventListener('click', handleShow);