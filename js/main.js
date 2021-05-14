const themeSwtich = document.querySelector('.theme-switch__checkbox');

themeSwtich.addEventListener('change', function () {
    if (this.checked) {
        transition();
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        transition();
        document.documentElement.setAttribute('data-theme', 'light');
    }
});

let transition = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition');
    }, 1000);
};

const menuBtn = document.querySelector('.header__btn-menu');
const menu = document.querySelector('.nav');
const menuLinks = document.querySelectorAll('.nav__link');

menuBtn.addEventListener('click', toggleMenu);

menuLinks.forEach(
    function (menuLink) {
        menuLink.addEventListener('click', toggleMenu);
    }
);

function toggleMenu() {
    if (menu.classList.contains("nav--active")) {
        menu.classList.remove("nav--active");
        menuBtn.classList.remove("header__btn-menu--active");
        document.documentElement.style.overflowY = 'auto';
    } else {
        menu.classList.add("nav--active");
        menuBtn.classList.add("header__btn-menu--active");
        document.documentElement.style.overflowY = 'hidden';
    }
}

const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach(function (item) {
    item.addEventListener('click', function (e) {
        e.preventDefault();

        const blockID = item.getAttribute('href').substr(1);

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});
