document.addEventListener('DOMContentLoaded', function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.animationDelay || 0;
                setTimeout(() => {
                    entry.target.style.opacity = 1;
                    entry.target.classList.add(entry.target.dataset.animation);
                }, delay);
            }
        });
    });

    document.querySelectorAll('[data-animation]').forEach(element => {
        observer.observe(element);
    });
});

// Selecciona todos los elementos con la clase animate__animated
const animatedElements = document.querySelectorAll('.animate__animated');

// Añade un event listener a cada elemento para detectar cuando termine la animación
animatedElements.forEach((element) => {
    element.addEventListener('animationend', () => {
        // Remueve la clase de animación cuando termine
        element.classList.remove('animate__animated');
    });
});


let currentOpenSubMenu = null;

function toggleMenu(event) {
    event.stopPropagation();
    const target = event.currentTarget;
    const subMenu = target.querySelector(".submenu");

    if (currentOpenSubMenu && currentOpenSubMenu !== subMenu) {
        closeMenu(currentOpenSubMenu);
    }

    if (subMenu.classList.contains("show")) {
        closeMenu(subMenu);
        currentOpenSubMenu = null;
    } else {
        openMenu(subMenu);
        currentOpenSubMenu = subMenu;
    }
}

function openMenu(subMenu) {
    subMenu.classList.add("show");
}

function closeMenu(subMenu) {
    subMenu.classList.remove("show");
}

document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.navbar li, .materias-info li');
    menuItems.forEach(item => {
        if (item.querySelector('.submenu')) {
            item.addEventListener('click', toggleMenu);
        }
    });

    document.addEventListener('click', (event) => {
        if (currentOpenSubMenu && !currentOpenSubMenu.contains(event.target)) {
            closeMenu(currentOpenSubMenu);
            currentOpenSubMenu = null;
        }
    });
});

// Slider functionality
let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;

next.onclick = function() {
    changeSlide(true);
}

prev.onclick = function() {
    changeSlide(false);
}

let refreshInterval = setInterval(() => { autoChangeSlide() }, 3000);

function changeSlide(isNext) {
    active = isNext ? (active + 1 <= lengthItems ? active + 1 : 0) : (active - 1 >= 0 ? active - 1 : lengthItems);
    reloadSlider();
}

function autoChangeSlide() {
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}

function reloadSlider() {
    slider.style.left = -items[active].offsetLeft + 'px';

    let last_active_dot = document.querySelector('.slider .dots li.active');
    if (last_active_dot) last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => { autoChangeSlide() }, 3000);
}

dots.forEach((li, key) => {
    li.addEventListener('click', () => {
        active = key;
        reloadSlider();
    });
});

window.onresize = function(event) {
    reloadSlider();
};

