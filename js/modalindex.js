
                       /* Вызов Формы */
var contactsbutton = document.querySelector(".contacts-button");
 
var popup = document.getElementsByClassName("modal-feedback")[0];
var close = document.getElementsByClassName("modal-close")[0];

var form = document.getElementsByClassName("feedback-form")[0];
var username = popup.querySelector("[name=feedback-username]");
var email = popup.querySelector("[name=feedback-email]");
var text = popup.querySelector("[name=feedback-text]");


contactsbutton.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  username.focus();

});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
    	
});

form.addEventListener("submit", function (evt) {
    if (!username.value || !email.value || !text.value ) {
    evt.preventDefault();
    popup.classList.add("modal-error");
    }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode ===27) {
    evt.preventDefault();
  if (popup.classList.contains("modal-show")) {
    popup.classList.remove("modal-show");
   	}
   }
});

                        /* Вызов Карты */

var contactsimg = document.querySelector(".contacts-img");
 
var popuptwo = document.getElementsByClassName("modal-map")[0];
var close = popuptwo.getElementsByClassName("modal-close")[0];


contactsimg.addEventListener("click", function (evt) {
  evt.preventDefault();
  popuptwo.classList.add("modal-show");

});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popuptwo.classList.remove("modal-show");
    
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode ===27) {
    evt.preventDefault();
  if (popuptwo.classList.contains("modal-show")) {
    popuptwo.classList.remove("modal-show");
    }
   }
});

                        /* Слайдер интсрументов */
/* Индекс слайда по умолчанию */
var slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
plusSlide.onclick=function() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
minusSlide.onclick=function() {
    showSlides(slideIndex -= 1);  
}

plusRadio.onclick=function() {
    showSlides(slideIndex += 1);
}

minusRadio.onclick=function() {
    showSlides(slideIndex -= 1);
}

/* Основная функция слайдера */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("variation-block__slide");
    var dots = document.getElementsByClassName("variation-block__radio");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

                        /* Слайдер сервисов */
/* Индекс слайда по умолчанию */
var slideServ = 1;
showSlide(slideServ);

/* Основная функция слайдера */
function showSlide(n) {
    var slides = document.getElementsByClassName("services-slider-item");

    if (n > slides.length) {
      slideServ = 1
    }
    if (n < 1) {
        slideServ = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";

    }
    slides[slideServ - 1].style.display = "block";
   
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