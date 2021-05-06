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