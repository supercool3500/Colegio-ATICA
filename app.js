let isMenuOpen = false; // Variable para rastrear el estado del menú

function toggleMenu(event) {
    event.stopPropagation();
    const target = event.currentTarget;
    const subMenu = target.querySelector(".submenu");

    if (subMenu.classList.contains("show")) {
        closeMenu(subMenu);
    } else {
        openMenu(subMenu);
    }
}

function openMenu(subMenu) {
    subMenu.classList.add("show");
}

function closeMenu(subMenu) {
    subMenu.classList.remove("show");
}

document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.main-nav li');
    menuItems.forEach(item => {
        if (item.querySelector('.submenu')) {
            item.addEventListener('click', toggleMenu);
        }
    });
});

let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 3000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);

    
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
        active = key;
        reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};