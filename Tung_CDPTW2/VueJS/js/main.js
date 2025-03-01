$(function() {
    "use strict";
    $('.preloder').on('click', function() { $(this).fadeOut(); });

    function bindNavbar() {
        if ($(window).width() > 768) {
            $('.navbar .dropdown').on('mouseover', function() { $('.dropdown-toggle', this).next('.dropdown-menu').show(); }).on('mouseout', function() { $('.dropdown-toggle', this).next('.dropdown-menu').hide(); });
            $('.dropdown-toggle').on('click', function() { if ($(this).next('.dropdown-menu').is(':visible')) { window.location = $(this).attr('href'); } });
        } else { $('.navbar-default .dropdown').off('mouseover').off('mouseout'); }
    }
    $(window).resize(function() { bindNavbar(); });
    bindNavbar();
    if ($('.special-slider').length) {
        $('.special-slider').flexslider({ animation: "slide", controlNav: false, directionNav: false, slideshow: true, slideshowSpeed: 3000 });
        $('.prev').on('click', function() { $('.special-slider').flexslider('prev'); return false; });
        $('.next').on('click', function() { $('.special-slider').flexslider('next'); return false; });
    }
    if ($('.menu-items').length) {
        var defaultFilter = $('.tagsort-active').attr('data-filter');
        var $grid = $('.menu-items').isotope({ itemSelector: '.menu-item', layoutMode: 'fitRows', filter: defaultFilter });
        $('.menu-tags').on('click', 'span', function() {
            $('.menu-tags span').removeClass('tagsort-active');
            $(this).toggleClass('tagsort-active');
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });
    }
    if ($('.menu-items2').length) {
        var defaultFilter = $('.tagsort2-active').attr('data-filter');
        var $grids = $('.menu-items2').isotope({ itemSelector: '.menu-item2', layoutMode: 'fitRows', filter: defaultFilter });
        $('.menu-tags2').on('click', 'span', function() {
            $('.menu-tags2 span').removeClass('tagsort2-active');
            $(this).toggleClass('tagsort2-active');
            var filterValue = $(this).attr('data-filter');
            $grids.isotope({ filter: filterValue });
        });
    }
    if ($('.menu-items3').length) {
        var defaultFilter = $('.tagsort3-active').attr('data-filter');
        var $grid3 = $('.menu-items3').isotope({ itemSelector: '.menu-item3', layoutMode: 'fitRows', filter: defaultFilter });
        $('.menu-tags3').on('click', 'span', function() {
            $('.menu-tags3 span').removeClass('tagsort3-active');
            $(this).toggleClass('tagsort3-active');
            var filterValue = $(this).attr('data-filter');
            $grid3.isotope({ filter: filterValue });
        });
    }
    if ($('.menu-items4').length) {
        var defaultFilter = $('.tagsort4-active').attr('data-filter');
        var $grid4 = $('.menu-items4').isotope({ itemSelector: '.menu-item4', layoutMode: 'fitRows', filter: defaultFilter });
        $('.menu-tags4').on('click', 'span', function() {
            $('.menu-tags4 span').removeClass('tagsort4-active');
            $(this).toggleClass('tagsort4-active');
            var filterValue = $(this).attr('data-filter');
            $grid4.isotope({ filter: filterValue });
        });
    }
    if ($('.recipie-items').length) {
        var $grid5 = $('.recipie-items').isotope({ itemSelector: '.recipie-item', layoutMode: 'masonry' });
        $('.recipie-tags').on('click', 'span', function() {
            $('.recipie-tags span').removeClass('recipie-active');
            $(this).toggleClass('recipie-active');
            var filterValue = $(this).attr('data-filter');
            $grid5.isotope({ filter: filterValue });
        });
    }
    if ($('.blog-mason').length) {
        var $grid6 = $('.blog-mason').isotope({ itemSelector: '.blog-mason-item', layoutMode: 'masonry' });
        $('.blog-tags').on('click', 'span', function() {
            $('.recipie-tags span').removeClass('blog-active');
            $(this).toggleClass('blog-active');
            var filterValue = $(this).attr('data-filter');
            $grid6.isotope({ filter: filterValue });
        });
    }
    if ($('.trusted-slider .slides').length) { $('.trusted-slider .slides').slick({ autoplay: true, autoplaySpeed: 2000, arrows: false, dots: true }); }
    if ($('.blog-slider').length) { $('.blog-slider').slick({ autoplay: true, autoplaySpeed: 2000, arrows: false, dots: true }); }
    if ($('.services-slider').length) { $('.services-slider').slick({ dots: true, arrows: false, infinite: false, speed: 300, slidesToShow: 2, slidesToScroll: 1, responsive: [{ breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1, infinite: true, dots: true } }, { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 1 } }, { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }] }); }
    if ($('.featured-recipies').length) { $('.featured-recipies').slick({ dots: true, arrows: false, infinite: false, speed: 300, slidesToShow: 4, slidesToScroll: 1, responsive: [{ breakpoint: 1024, settings: { slidesToShow: 4, slidesToScroll: 1, infinite: true, dots: true } }, { breakpoint: 767, settings: { slidesToShow: 2, slidesToScroll: 1 } }, { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }] }); }
    $('.single-recipe-carousel').slick({ autoplay: true, slidesToShow: 1, slidesToScroll: 1, arrows: false, asNavFor: '.single-recipe-carousel-nav' });
    $('.single-recipe-carousel-nav').slick({ slidesToShow: 6, slidesToScroll: 1, asNavFor: '.single-recipe-carousel', focusOnSelect: true });
    $('.single-shop-carousel').slick({ autoplay: true, slidesToShow: 1, slidesToScroll: 1, arrows: false, asNavFor: '.single-shop-carousel-nav' });
    $('.single-shop-carousel-nav').slick({ slidesToShow: 3, slidesToScroll: 1, asNavFor: '.single-shop-carousel', focusOnSelect: true });
    if ($('.trusted-sponsors').length) { $('.trusted-sponsors').owlCarousel({ loop: false, center: false, margin: 30, responsive: { 0: { items: 2 }, 600: { items: 3 }, 1000: { items: 5 } } }); }
    if ($('#instafeed').length) {
        var ig_user = $('#instafeed').attr('data-username');
        var ig_access_token = $('#instafeed').attr('data-access-token');
        var ig_cliet_id = $('#instafeed').attr('data-client-id');
        var user_pacehold = 'YOUR_INSTAGRAM_USERNAME_HERE';
        var access_pacehold = 'YOUR_INSTAGRAM_ACCESS_TOKEN_HERE';
        var client_pacehold = 'YOUR_INSTAGRAM_CLIENT_ID_HERE';
        if (ig_user == user_pacehold || ig_access_token == access_pacehold || ig_cliet_id == client_pacehold) { $('#instafeed').html('<div style="background:#FCFCFC; padding:70px 20px; text-align:center;"><p style="max-width:500px; margin:0 auto;">To display Instagram Photos, Please add your username, access token and client id in the HTML.<p><div>') } else {
            jQuery.fn.spectragram.accessData = { accessToken: ig_access_token, clientID: ig_cliet_id };
            $('#instafeed').spectragram('getUserFeed', { query: ig_user, size: 'small', wrapEachWith: '<span></span>', complete: function() { $("#instafeed").owlCarousel({ center: false, loop: true, responsive: { 0: { items: 3 }, 600: { items: 5 }, 1000: { items: 8 } } }); } });
        }
    }
    if ($('#datepicker').length) { $("#datepicker").datepicker({ dateFormat: 'mm/dd/yy', startDate: '0', autoclose: true, todayHighlight: true }); }
    if ($('#timepicker').length) { $('#timepicker').clockpicker({ donetext: 'Done' }).find('input').change(function() { console.log(this.value); }); }
    if ($('.about-photo img').length) { $('.about-photo img').magnificPopup({ type: 'image', removalDelay: 300, mainClass: 'mfp-fade' }); }
    if ($('.gallery-item').length) { $('.gallery-item').magnificPopup({ type: 'image', removalDelay: 300, mainClass: 'mfp-fade', gallery: { enabled: true, navigateByImgClick: true, preload: [0, 1] } }); }
    if ($.validator) { $.validator.setDefaults({ ignore: [], highlight: function(element) { $(element).closest('.form-group').addClass('has-error'); }, unhighlight: function(element) { $(element).closest('.form-group').removeClass('has-error'); }, errorElement: 'small', errorClass: 'help-block', errorPlacement: function(error, element) { if (element.parent('.input-group').length || element.parent('label').length) { error.insertAfter(element.parent()); } else { error.insertAfter(element); } } }); }
    $('.open-table-container').each(function() {
        var restaurantID = $(this).attr('data-restaurant-id');
        $(this).find('.OT_hidden[name="RestaurantID"]').attr('value', restaurantID);
    });
    if ($.validator) { $("#ism").submit(function(e) { e.preventDefault(); }).validate({ rules: { startDate: { required: true }, PartySize: { required: true }, ResTime: { required: true } }, submitHandler: function(form) { form.submit(); return false; } }); }
    var scrollAnim = $('body').data('scroll-animation');
    if (scrollAnim) { new WOW().init(); }
    $(".player").mb_YTPlayer();
    $("#intro3 .home").vegas({ slides: [{ src: "img/fullImages/pic1.jpg" }, { src: "img/fullImages/pic2.jpg" }, { src: "img/fullImages/pic3.jpg" }] });
    $.stellar({ horizontalScrolling: false, responsive: true });
    $('#accordion-e1 .collapse').on('shown.bs.collapse', function() {
        $(this).parent().find(".fa-plus").removeClass("fa-plus").addClass("fa-minus");
        $(this).parent().find("h4").addClass("active");
    }).on('hidden.bs.collapse', function() {
        $(this).parent().find(".fa-minus").removeClass("fa-minus").addClass("fa-plus");
        $(this).parent().find("h4").removeClass("active");
    });
    $('.btn-settings').on('click', function() {
        $(this).parent().toggleClass('active');
        $("body").toggleClass('boxed-wrap');
    });
    $('.switch-handle').on('click', function() {
        $(this).toggleClass('active');
        $('.body').toggleClass('boxed');
    });
    $('.bg-list div').on('click', function() {
        if ($(this).hasClass('active')) return false;
        if (!$('.switch-handle').hasClass('active')) $('.switch-handle').trigger('click');
        $(this).addClass('active').siblings().removeClass('active');
        var cl = $(this).attr('class');
        $('body').attr('class', cl);
    });
    $('.color-list div').on('click', function() {
        if ($(this).hasClass('active')) return false;
        $('link.color-scheme-link').remove();
        $(this).addClass('active').siblings().removeClass('active');
        var src = $(this).attr('data-src'),
            colorScheme = $('<link class="color-scheme-link" rel="stylesheet" />');
        colorScheme.attr('href', src).appendTo('head');
    });
    $('.reset').on('click', function() {
        $(".bg-list div").removeClass('active');
        $(".switch-handle").removeClass('active');
        $(".color-list div").removeClass('active');
        $(".body").removeClass('boxed');
        if ($(this).hasClass('active')) return false;
        $('link.color-scheme-link').remove();
        var src = $(this).attr('data-src'),
            colorScheme = $('<link class="color-scheme-link" rel="stylesheet" />');
        colorScheme.attr('href', src).appendTo('head');
    });
    $('.reset span').on('click', function() {
        var cl = $(this).attr('class');
        $('body').attr('class', cl);
    });
    $(window).scroll(function() {
        var value = $(this).scrollTop();
        if (value > 350)
            $(".navbar-fixed-top").css("background", "rgba(0, 0, 0, 0.9)");
        else
            $(".navbar-fixed-top").css("background", "rgba(0, 0, 0, 0.3)");
    });
});