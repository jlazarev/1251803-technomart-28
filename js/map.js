let mapLink = document.querySelector(".map-link");
let mapPopup = document.querySelector(".map-popup");
let mapClose = mapPopup.querySelector(".map-close");

mapLink.addEventListener("click", function () {
	mapPopup.classList.add("popup-open");
});

mapClose.addEventListener("click", function (evt) {
	evt.preventDefault();
	mapPopup.classList.remove("popup-open");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("popup-open")) {
      evt.preventDefault();
      mapPopup.classList.remove("popup-open");
    }
  }
});