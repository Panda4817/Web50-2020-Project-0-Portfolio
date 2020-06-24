
//toggleShow function for about page on a mobile so overlay shows when picture is clicked
function toggleShow() {
    var element = document.querySelector(".overlay");
        element.className.toggle("overlay-show");
        return;
}

//Offsett page when loading same-page links
function addMargin() {
    window.scrollTo(0, window.pageYOffset - 75);
}

window.addEventListener('hashchange', addMargin);

