
/* Индекс слайда по умолчанию */
var slideIndex = 1;
showSlide(slideIndex);


/* Устанавливает текущий слайд */
function currentSlider(n) {
    showSlide(slideIndex = n);
}

/* Основная функция слайдера */
function showSlide(n) {
    var slides = document.getElementsByClassName("services-slider-item");

    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";

    }
    slides[slideIndex - 1].style.display = "block";
   
}

/*Динамические изменения слайдера */

var sliderDyn = document.getElementById("myDyn");
var btns = sliderDyn.getElementsByClassName("services-slider-options");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("dynamic");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" dynamic", "");
  }
  this.className += " dynamic";
});
}