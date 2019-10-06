var catalogbutton = document.querySelector(".catalog-list");
var inner = catalogbutton.querySelectorAll(".buy");

var popupthree = document.querySelector(".modal-purchases");
var close = popupthree.querySelector(".modal-close");

catalogbutton.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupthree.classList.add("modal-show");
});

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
