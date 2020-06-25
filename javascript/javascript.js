

AOS.init({
    once: true
});

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
      }, 1000);
}
