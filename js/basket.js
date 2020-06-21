let basketLink = document.querySelector(".basket-link");
let basketPopup = document.querySelector(".basket-popup");
let basketClose = basketPopup.querySelector(".basket-close");

basketLink.addEventListener("click", function (evt) {
	evt.preventDefault();
	basketPopup.classList.add("basket-popup-open");
});

basketClose.addEventListener("click", function (evt) {
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