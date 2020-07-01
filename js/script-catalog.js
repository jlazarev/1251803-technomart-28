// basket popup

var basketLinks = document.querySelectorAll(".basket-link");
var basketPopup = document.querySelector(".basket-popup");
var basketClose = basketPopup.querySelector(".basket-close");
var basketProceed = basketPopup.querySelector(".basket-popup-button");
var cart = document.querySelector(".cart");

for (var i = 0; i < basketLinks.length; i++) {
  basketLinks[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    basketPopup.classList.add("basket-popup-open");
    if (!cart.classList.contains("cart-full")) {
      cart.classList.add("cart-full");
    }
  });  
}

basketClose.addEventListener("click", function (evt) {
	evt.preventDefault();
	basketPopup.classList.remove("basket-popup-open");
});

basketProceed.addEventListener("click", function (evt) {
  evt.preventDefault();
  basketPopup.classList.remove("basket-popup-open");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (basketPopup.classList.contains("basket-popup-open")) {
      evt.preventDefault();
      basketPopup.classList.remove("basket-popup-open");
    }
  }
});

// bookmark

var markLinks = document.querySelectorAll(".mark-link");
var bookMark = document.querySelector(".bookmark");

for (var i = 0; i < markLinks.length; i++) {
  markLinks[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    if (!bookMark.classList.contains("cart-full")) {
      bookMark.classList.add("cart-full");
    }
  });  
}