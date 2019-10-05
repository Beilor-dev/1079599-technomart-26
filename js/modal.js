var catalogbutton = document.querySelector(".catalog-item-button.buy");

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