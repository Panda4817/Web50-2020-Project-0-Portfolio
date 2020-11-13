AOS.init();
if ($('.owl-carousel') ){
    var welcomeSlide = $('.hero-slides');

    welcomeSlide.owlCarousel({
        items: 1,
        margin: 0,
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 8000,
        smartSpeed: 1000
    });

    welcomeSlide.on('translate.owl.carousel', function () {
        var slideLayer = $("[data-animation]");
        slideLayer.each(function () {
            var anim_name = $(this).data('animation');
            $(this).removeClass('animate__' + anim_name).css('opacity', '0');
        });
    });

    welcomeSlide.on('translated.owl.carousel', function () {
        var slideLayer = welcomeSlide.find('.owl-item.active').find("[data-animation]");
        slideLayer.each(function () {
            var anim_name = $(this).data('animation');
            $(this).addClass('animate__' + anim_name).css('opacity', '1');
        });
    });

    $("[data-delay]").each(function () {
        var anim_del = $(this).data('delay');
        $(this).addClass('animate__delay-'+anim_del);
    });
}
    

function show(data) {
    var div = data.querySelector('.overlay');
    div.className = "overlay-show";
    setTimeout(() => {
        div.classList.remove('overlay-show');
        div.className = "overlay";
    }, 5000);
}


function scrollToTargetAdjusted(data) {
    $('html').animate({
        scrollTop: $("#"+data).offset().top - 100
      }, 2000);
}

function scrollToTop(data) {
    $('html').animate({
        scrollTop: $("#"+data).offset().top
      }, 1000);
}
