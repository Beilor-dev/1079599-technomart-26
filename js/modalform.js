

var contactsbutton = document.querySelector(".contacts-button");
 
var popup = document.querySelector(".modal-feedback");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector("form");
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


// -------------------------------------------------------

var contactsimg = document.querySelector(".contacts-img");
 
var popuptwo = document.querySelector(".modal-map");
var close = popuptwo.querySelector(".modal-close");


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

// -------------------------------------------------------
