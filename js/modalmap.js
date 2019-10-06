var contactsimg = document.querySelector(".contacts-img");
 
var popuptwo = document.querySelector(".modal-map");
var close = popuptwo.querySelector(".modal-close.second");




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
   	popuptwo.classList.remove("modal-error");
   	 }
   }
});


