$(window).load(function() {
    "use strict";
    var fadeOutPreloder = { p: { opacity: 0 }, o: { duration: 750, display: 'none' } };
    var fadeIn = { p: { opacity: 1 }, o: { duration: 750, } };
    var scroll = { o: { duration: 500, easing: "easeInOutQuart" } };
    $('.preloder').velocity(fadeOutPreloder.p, fadeOutPreloder.o);
    var homeInSequence = [{ e: $('.logo'), p: fadeIn.p, o: fadeIn.o }, { e: $('.home h1'), p: fadeIn.p, o: fadeIn.o }, { e: $('.home h2'), p: fadeIn.p, o: fadeIn.o }, { e: $('.scroll-down'), p: fadeIn.p, o: fadeIn.o }];
    $(".logo").css("opacity", "0");
    $(".home h1").css("opacity", "0");
    $(".home h2").css("opacity", "0");
    $(".scroll-down").css("opacity", "0");
    setTimeout(function() { $.Velocity.RunSequence(homeInSequence); }, 750);
    $(".scroll-down a").click(function() { $(".about").velocity("scroll", scroll.o); });
});