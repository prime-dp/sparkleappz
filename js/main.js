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
        //nav: true,
        autoplay: true,
        loop: true,
        navText : ["",""],
        //navContainer: '.clients-carousel-wrap',
        dots: false
        //margin: 10
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

    let owl = $('.owl-carousel');
    owl.owlCarousel();
    $('.customNextBtn').click(function() {
        owl.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.customPrevBtn').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    });

    wow.init();

    //валидация форм
    let pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i,
        mailInput = $('#input-email'),
        nameInput = $('#input-name'),
        textInput = $('#input-message');

    $('#contacts-form').submit(function(event){
        $('.form-control').removeClass('invalid-input');
        if(mailInput.val() != '' || nameInput.val() != '' || textInput.val() != ''){
            if(mailInput.val().search(pattern) == 0){
                //alert("алё");
                mailInput.removeClass('invalid-input');
            }else{
                //alert("не алё");
                mailInput.addClass('invalid-input');
            }
            if(nameInput.val() != ''){
                $(this).removeClass('invalid-input');
            }else {
                $(this).addClass('invalid-input');
            }
            if(textInput.val() != ''){
                $(this).removeClass('invalid-input');
            }else {
                $(this).addClass('invalid-input');
            }
        }else{

            //alert("пусто");
            $('.form-control').addClass('invalid-input');
        }
        event.preventDefault();
    });

    //phone mask

    //$("#input-phone").mask("+3 (000) 000-0000");


    //scrollspy

    // function Scroll_block() {
    //     let scrolled = $(document).scrollTop(),
    //         windowHeight = $(window).height() / 2;  //высота окна
    //
    //     $("#top-menu a").each(function () {
    //         let hash = $(this).attr("href"),
    //             target = $(hash),
    //             mainContent = $("#main-content");
    //
    //         if (mainContent.offset().top < windowHeight + scrolled) {
    //             $("#link-start").addClass("show-link");
    //             $('#contacts-list').addClass('show-contacts');
    //         } else {
    //             $("#link-start").removeClass("show-link");
    //             $('#contacts-list').removeClass('show-contacts');
    //         }
    //
    //         if ($(window).width() > 991) {
    //             if (target.position().top - windowHeight <= scrolled && target.position().top + target.outerHeight() - windowHeight > scrolled) {
    //                 $("#top-menu li.active").parent().removeClass("active");
    //                 $(this).parent().addClass("active");
    //             } else {
    //                 $(this).parent().removeClass("active");
    //             }
    //         }
    //     });
    // }
    //
    // $(document).on("scroll", Scroll_block);
    //
    // $("a[href*=\\#]").click(function(e){
    //     e.preventDefault();
    //     $(document).off("scroll");
    //
    //     //Подсветка пунктов шапки в мобайле
    //     if ($(window).width() > 991) {
    //         $("#top-menu li.active").removeClass("active");
    //         $(this).parent().addClass("active");
    //     }
    //
    //     let hash = $(this).attr("href"),
    //         target = $(hash);
    //
    //     $("html, body").animate({
    //         scrollTop: target.offset().top
    //     }, 800, function(){
    //         window.location.hash = hash;
    //         $(document).on("scroll", Scroll_block);
    //     });
    // });
});