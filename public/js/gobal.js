window.onload = function() {
    var mobile_bars = document.querySelector('.dropdown');
    var mobile_menu = document.querySelector('.nav-mobile');
    var header = document.querySelector('.navbar');

    mobile_bars.addEventListener('click', function () {
        mobile_bars.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
        header.classList.toggle('is-active');
    });
};