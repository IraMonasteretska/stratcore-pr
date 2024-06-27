$(document).ready(function () {

    // $('.header__lang span').click(function () {
    //     $(this).next('ul').toggle();
    // });

    // $(document).click(function (event) {
    //     let $target = $(event.target);
    //     if (!$target.closest('.header__lang').length) {
    //         $('.header__lang ul').hide();
    //     }
    // });






    $(window).on('scroll load', function () {
        if ($(this).scrollTop() > 20) {
            $('.header').addClass('scroll');
        } else {
            $('.header').removeClass('scroll');
        }
    });

    // testimonials
    var swiper = new Swiper(".testimonialslider", {
        slidesPerView: 1,
        spaceBetween: 20,
        speed: 1000,
        loop: true,
        // autoplay: {
        //     delay: 3500,
        //     disableOnInteraction: false,
        // },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        breakpoints: {
            
            992: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        },
    });

    // styled selects
    if ($('select').length) {
        $('.styledselect').select2({
            placeholder: "Select a state",
            minimumResultsForSearch: Infinity,
        });
    }

    // faq
    $('.faq__header').click(function(){
        $(this).toggleClass('active');
        $('.faq__body').not($(this).next('.faq__body')).slideUp();
        $(this).next('.faq__body').slideToggle();
    });















    // if ($(window).width() < 992) {

    // }

});