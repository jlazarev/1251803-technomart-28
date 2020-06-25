let markLinks = document.querySelectorAll(".mark-link");
let bookMark = document.querySelector(".bookmark");

for (var i = 0; i < markLinks.length; i++) {
  markLinks[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    if (!bookMark.classList.contains("cart-full")) {
      bookMark.classList.add("cart-full");
    }
  });  
}