// alert("Script is working");

var prevBtn = document.querySelector(".prev");

var nextBtn = document.querySelector(".next");

var images = document.querySelector(".image-container").children;
var totalImages = images.length;
var index = 0;

prevBtn.onclick = function () {
  changeImage("prev");
};
nextBtn.onclick = function () {
  changeImage("next");
};

function changeImage(direction) {
  if (direction == "next") {
    index++;
    if (index == totalImages) {
      index = 0;
    }
  } else {
    if (index == 0) {
      index = totalImages - 1;
    } else {
      index--;
    }
  }

  for (var i = 0; i < images.length; i++) {
    images[i].classList.remove("main");
  }
  images[index].classList.add("main");
}
