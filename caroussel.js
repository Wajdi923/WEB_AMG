var indexOfSlide = 1;

function Slide_pass(n) {
    clearInterval(myTimer);
    if (n < 0) {
        showSlide(indexOfSlide -= 1);
    } else {
        showSlide(indexOfSlide += 1);
    }
    if (n === -1) {
        myTimer = setInterval(function() { Slide_pass(n + 2) }, 2000);
    } else {
        myTimer = setInterval(function() { Slide_pass(n + 1) }, 2000);
    }
}

function showSlide(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) { indexOfSlide = 1 }
    if (n < 1) { indexOfSlide = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[indexOfSlide - 1].style.display = "block";

}

window.addEventListener("load", function() {
    showSlide(indexOfSlide);
    myTimer = setInterval(function() { Slide_pass(1) }, 2000);
})