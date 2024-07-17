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
            $('.phonebtn').css({
                'opacity': 1,
                'z-index': 4,
                'transform': 'translateX(0px)'
            });
        } else {
            $('.header').removeClass('scroll');
            $('.phonebtn').css({
                'opacity': 0,
                'z-index': -1,
                'transform': 'translateX(20px)'
            });
        }
    });

    // testimonials
    var swiper = new Swiper(".testimonialslider.s1", {
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
            nextEl: ".swiper-button-next.s1",
            prevEl: ".swiper-button-prev.s1",
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
    var swiper = new Swiper(".testimonialslider.s2", {
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
            nextEl: ".swiper-button-next.s2",
            prevEl: ".swiper-button-prev.s2",
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
            // placeholder: "Select a state",
            minimumResultsForSearch: Infinity,
        });
    }

    // faq
    $('.faq__header').click(function () {
        $(this).toggleClass('active');
        $('.faq__body').not($(this).next('.faq__body')).slideUp();
        $('.faq__header').not($(this)).removeClass('active');
        $(this).next('.faq__body').slideToggle();
    });

    // menu
    if ($(window).width() < 1200) {
        $('.sublink a').click(function (e) {
            e.preventDefault();
            $(this).next('.menudd').toggle();
        })
    }

    $('.headermenu').click(function () {
        $('.header__centersect').addClass('active');
    });

    $('.closemenu').click(function () {
        $('.header__centersect').removeClass('active');
    });

    //  show hidden text 

    $('.aboutinfo__content .more').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('open');
        $('.hidden-text').slideToggle();
    });

    
    var swiper = new Swiper(".otherpostsl", {
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
            575: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        },
    });










});