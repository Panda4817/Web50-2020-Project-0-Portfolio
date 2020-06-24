
function offsetAnchor(e) {         
    if (location.hash.length !== 0 && location.hash !== "#top") {             
        window.scroll(0, $(e.target.hash).position().top + 200);         
    }     
}     
$(document).on('click', 'a[href^="#"]', function (e) {         
    window.setTimeout(function () {             
        offsetAnchor(e);         
    }, 10);     
});

AOS.init();

function show(data) {
    var div = data.querySelector('.overlay');
    div.className = "overlay-show";
    setTimeout(() => {
        div.classList.remove('overlay-show');
        div.className = "overlay";
    }, 5000);
}
       
