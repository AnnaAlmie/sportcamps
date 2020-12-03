$(document).ready(function() {
    if ($('div').hasClass('page__first')) { //only for landing page
        fullPage();
        if (window.matchMedia("(min-width: 829px)").matches) { //desktop
            sliderVerticle();
        }
    }
    if ($('div').hasClass('page__secondary')) { //only for cases page
        sliderCases();

        if (window.matchMedia("(min-width: 829px)").matches) { //desktop
            wrapCases();
        }
    }
});

/*-----------------------------------------*/

if (window.matchMedia("(max-width: 828px)").matches) {
    $(".menu__mobile__btn, .menu__link").click(function() { //Open-close mobile munu
        $(".menu__mobile__btn").toggleClass("menu__mobile__btn__active");
        $(".header__menu").toggleClass("open__menu");
    })
}

/*--------------------landing page---------------------*/

function fullPage() {
    $('#fullpage').fullpage({
        sectionSelector: '.vertical-scrolling',
        slidesNavigation: false,
        anchors: ['main', 'advantages', 'advantages-slider', 'сamps', 'сases', 'models', 'models-slider', 'how', 'how-slider', 'faq'],
        menu: '#menu',
        keyboardScrolling: true,
        controlArrows: true,
        responsiveWidth: 828
    });
}

/*-------------------cases page----------------------*/

function wrapCases() {
    $(".block:nth-child(1), .block:nth-child(3), .block:nth-child(4)").wrapAll("<div class='block__wrap__mini'></div>");
}

/*-------------------Sliders----------------------*/

function sliderVerticle() { //full page 
    $(".slider__verticle").each(function(index) {
        $(this).slick({
            lazyLoad: 'ondemand',
            infinite: true,
            // fade: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            prevArrow: '<div class="slider__arrow slider__arrow__prev"></div>',
            nextArrow: '<div class="slider__arrow slider__arrow__next"></div>',
            vertical: true
        })
    })
}

/*-----------------------------------------*/

function sliderCases() { //962 height
    $(".slider__wrap").slick({
        lazyLoad: 'ondemand',
        infinite: true,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        dotsClass: 'slider__dots',
        arrows: true,
        prevArrow: '<div class="slider__arrow slider__arrow__prev"></div>',
        nextArrow: '<div class="slider__arrow slider__arrow__next"></div>',

    })
}

/*-----------------------------------------*/


// faq 
$('.slide__block').click(function() {
    $('.slide__block').removeClass('slide__block__open');
    $(this).addClass('slide__block__open');
})