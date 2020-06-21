var writeUsLink = document.querySelector(".write-us-link");
var writeUsPopup = document.querySelector(".write-us-popup");
var writeUsClose = writeUsPopup.querySelector(".write-us-close");

var writeUsForm = writeUsPopup.querySelector(".write-us-form");
var writeUsName = writeUsPopup.querySelector(".write-us-name");
var writeUsEmail = writeUsPopup.querySelector(".write-us-email");
// var writeUsText = writeUsPopup.querySelector(".write-us-text");

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
});

writeUsForm.addEventListener("submit", function (evt) {
  if (!writeUsName.value || !writeUsEmail.value) {
    evt.preventDefault();
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
    }
  }
});