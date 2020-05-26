


function ibg() {

    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    }
}

ibg();

const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const body = document.body;

const links = document.querySelectorAll('.menu__item');

// Бургер меню
burger.onclick = function () {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('lock');

    for (let i = 0; i < links.length; i++) {
        links[i].onclick = function () {
            burger.classList.remove('active');
            menu.classList.remove('active');
            body.classList.remove('lock');
        }
    }

}




// Скролл
let $menu = $("#header");

if ($(this).scrollTop() > 100 && $menu.hasClass("default")) {

    $menu.removeClass("default").addClass("fixed");

}

$(window).scroll(function () {

    if ($(this).scrollTop() > 100 && $menu.hasClass("default")) {

        $menu.removeClass("default").addClass("fixed");

    }

    else if ($(this).scrollTop() <= 100 && $menu.hasClass("fixed")) {

        $menu.removeClass("fixed").addClass("default");

    }
});

$(document).ready(function () {
    $('[data-fancybox]').fancybox({
        toolbar: false,
        animationEffect: "zoom-in-out",
        animationDuration: 366,
        smallBtn: true,
        arrows: true,

    });
});
