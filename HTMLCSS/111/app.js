const checkbox = document.getElementById("checkbox");
const image = document.getElementById("image");

checkbox.addEventListener("change", function() {
  if (this.checked) {
    image.src = "img/2.jpg";
  } else {
    image.src = "img/1.jpg";
  }
});