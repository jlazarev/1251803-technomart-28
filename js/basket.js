let basketLinks = document.querySelectorAll(".basket-link");
let basketPopup = document.querySelector(".basket-popup");
let basketClose = basketPopup.querySelector(".basket-close");
let basketProceed = basketPopup.querySelector(".basket-popup-button");
let cart = document.querySelector(".cart");

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