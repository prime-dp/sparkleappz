$(document).ready(function() {

    //шапка
    $(window).scroll(function () {

        let wScroll = $(this).scrollTop();

        if (wScroll > 30) {
            $('.header-wrapper').addClass('header-active');
        } else {
            $('.header-wrapper').removeClass('header-active');
        }

    });

    $(".owl-carousel").owlCarousel({
        items: 5,
        nav: true,
        autoplay: true,
        loop: true,
        navText : ["",""],
        navContainer: '.clients-carousel-wrap',
        dots: false,
        margin: 10
    });

    //анимация
    wow = new WOW(
        {
            boxClass:     'wow',      // default
            animateClass: 'animated', // default
            offset:       0,          // default
            live:         true
        }
    );

    wow.init();
});