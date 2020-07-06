// write us popup

var writeUsLink = document.querySelector(".write-us-link");
var writeUsPopup = document.querySelector(".write-us-popup");
var writeUsClose =  writeUsPopup.querySelector(".write-us-close");

var writeUsForm =  writeUsPopup.querySelector(".write-us-form");
var writeUsName =  writeUsPopup.querySelector(".write-us-name");
var writeUsEmail =  writeUsPopup.querySelector(".write-us-email");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

writeUsLink.addEventListener("click", function (evt) {
	evt.preventDefault();
	writeUsPopup.classList.add("popup-open");

  	if (storage) {
    	writeUsName.value = storage;
    	writeUsEmail.focus();
  	} else {
		writeUsName.focus();
	}
});

writeUsClose.addEventListener("click", function (evt) {
	evt.preventDefault();
	writeUsPopup.classList.remove("popup-open");
	writeUsPopup.classList.remove("popup-error");
});

writeUsForm.addEventListener("submit", function (evt) {
  if (!writeUsName.value || !writeUsEmail.value) {
    evt.preventDefault();
    writeUsPopup.classList.remove("popup-error");
    writeUsPopup.offsetWidth = writeUsPopup.offsetWidth;
    writeUsPopup.classList.add("popup-error")
  } else {
  	if (isStorageSupport) {
    	localStorage.setItem("login", writeUsName.value);
	}
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (writeUsPopup.classList.contains("popup-open")) {
      evt.preventDefault();
      writeUsPopup.classList.remove("popup-open");
      writeUsPopup.classList.remove("popup-error");
    }
  }
});

// slider

var radioButtons = document.querySelectorAll(".radio-button");
var sliderItems = document.querySelectorAll(".slider-item");

var back = document.querySelector(".back");
var forward = document.querySelector(".forward");

var addThumbnailClickHandler = function (item, button) {
    button.addEventListener("click", function () {
      for (var j = 0; j < sliderItems.length; j++) {
        radioButtons[j].classList.remove("radio-button-checked");
        sliderItems[j].classList.remove("slider-show");
      }

      if (button === radioButtons[0]) {
        back.setAttribute("disabled", "disabled");
      } else {
        back.removeAttribute("disabled");
      }

      if (button === radioButtons[radioButtons.length - 1]) {
        forward.setAttribute("disabled", "disabled");
      } else {
        forward.removeAttribute("disabled");
      }

      button.classList.add("radio-button-checked");
      item.classList.add("slider-show");
    });
};

for (var i = 0; i < sliderItems.length; i++) {
    addThumbnailClickHandler(sliderItems[i], radioButtons[i]);
}

forward.addEventListener("click", function () {
  for (var j = 0; j < sliderItems.length; j++) {
      if (sliderItems[j].classList.contains("slider-show")) {
        
        sliderItems[j].classList.remove("slider-show");
        sliderItems[j + 1].classList.add("slider-show");

        radioButtons[j].classList.remove("radio-button-checked");
        radioButtons[j + 1].classList.add("radio-button-checked");

        if (sliderItems[j + 1] === sliderItems[sliderItems.length - 1]) {
          forward.setAttribute("disabled", "disabled");
        }

        if (sliderItems[j] === sliderItems[0]) {
          back.removeAttribute("disabled");
        }

        break;
      }
    }
});

back.addEventListener("click", function () {
  for (var j = 0; j < sliderItems.length; j++) {
      if (sliderItems[j].classList.contains("slider-show")) {
        
        sliderItems[j].classList.remove("slider-show");
        sliderItems[j - 1].classList.add("slider-show");

        radioButtons[j].classList.remove("radio-button-checked");
        radioButtons[j - 1].classList.add("radio-button-checked");

        if (sliderItems[j] === sliderItems[sliderItems.length - 1]) {
          forward.removeAttribute("disabled");
        }

        if (sliderItems[j - 1] === sliderItems[0]) {
          back.setAttribute("disabled", "disabled");
        }

        break;
      }
    }
});

// map popup

var mapLink = document.querySelector(".map-link");
var mapPopup = document.querySelector(".map-popup");
var mapClose = mapPopup.querySelector(".map-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
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