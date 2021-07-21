const body = document.querySelector("#image");
const IMG_NUMBER = 18;

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `image/${imgNumber}.jpg`;
  body.prepend(image);
}

function getRandom() {
  const number = Math.ceil(Math.random() * 18);
  return number;
}

function init() {
  paintImage(getRandom());
}
init();
