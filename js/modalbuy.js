                  
                  /* Вызов Покупки */
var buyButton = document.querySelectorAll(".buy");

var popupthree = document.querySelector(".modal-purchases");
var close = popupthree.querySelector(".modal-close");

 for (let i = 0; i < buyButton.length; i++) {
     buyButton[i].addEventListener("click", function(evt) {
       popupthree.classList.add("modal-show");
     });
 }

close.addEventListener("click", function (evt) {
  	evt.preventDefault();
  	popupthree.classList.remove("modal-show");
});


 window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popupthree.classList.contains("modal-show")) {
        popupthree.classList.remove("modal-show");
      }
    }
});
