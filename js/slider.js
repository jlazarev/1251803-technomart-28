var radioButtons = document.querySelectorAll('.radio-button');
var sliderItems = document.querySelectorAll('.slider-item');

var back = document.querySelector('.back');
var forward = document.querySelector('.forward');

var addThumbnailClickHandler = function (item, button) {
  	button.addEventListener('click', function () {
    	for (var j = 0; j < sliderItems.length; j++) {
    		radioButtons[j].classList.remove('radio-button-checked');
    		sliderItems[j].classList.remove('slider-show');
    	}

    	if (button === radioButtons[0]) {
    		back.setAttribute("disabled", "disabled");
    	} else {
    		back.removeAttribute("disabled")
    	}

    	if (button === radioButtons[radioButtons.length - 1]) {
    		forward.setAttribute("disabled", "disabled");
    	} else {
    		forward.removeAttribute("disabled")
    	}

    	button.classList.add('radio-button-checked');
    	item.classList.add('slider-show');
  	});
};

for (var i = 0; i < sliderItems.length; i++) {
  	addThumbnailClickHandler(sliderItems[i], radioButtons[i]);
}



forward.addEventListener('click', function () {

});
