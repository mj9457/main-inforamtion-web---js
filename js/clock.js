const ampm = document.querySelector(".js-ampm"),
  clockTitle = document.querySelector(".js-time");

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  let hours = date.getHours();
  const seconds = date.getSeconds();
  let ap = null;

  if (hours > 12) {
    hours = hours - 12;
    ap = "PM";
  } else {
    ap = "AM";
  }
  if (hours == 0) {
    hours = 12;
  }

  ampm.innerText = `${ap}`;
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();

/* 
const clock = document.querySelector(".js-clock .clock-text");

function getTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const time = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
  clock.innerHTML = time;
  return;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
  return;
}

init(); */

/* function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
} 

getClock();
setInterval(getClock, 1000); */
