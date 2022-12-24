document.querySelector(".ac").onclick = clear;
document.querySelector(".zero").onclick = addZero;
document.querySelector(".one").onclick = addOne;
document.querySelector(".two").onclick = addTwo;
document.querySelector(".three").onclick = addThree;
document.querySelector(".four").onclick = addFour;
document.querySelector(".five").onclick = addFive;
document.querySelector(".six").onclick = addSix;
document.querySelector(".seven").onclick = addSeven;
document.querySelector(".eight").onclick = addEight;
document.querySelector(".nine").onclick = addNine;
document.querySelector(".equal").onclick = result;

let x = document.querySelector(".screen");
let len = 8;

function result() {
  let number = parseInt(x.innerHTML);
  result = 3.14 * number ** 2;
  if (isNaN(result)) {
  } else {
    x.innerHTML = Math.round(result * 10) / 10;
  }
}

function clear() {
  x.innerHTML = "";
}

function addZero() {
  if (x.innerHTML.length < len) {
    x.innerHTML += "0";
  }
}

function addOne() {
  if (x.innerHTML.length < len) {
    x.innerHTML += "1";
  }
}

function addTwo() {
  if (x.innerHTML.length < len) {
    x.innerHTML += "2";
  }
}

function addThree() {
  if (x.innerHTML.length < len) {
    x.innerHTML += "3";
  }
}

function addFour() {
  if (x.innerHTML.length < len) {
    x.innerHTML += "4";
  }
}

function addFive() {
  if (x.innerHTML.length < len) {
    x.innerHTML += "5";
  }
}

function addSix() {
  if (x.innerHTML.length < len) {
    x.innerHTML += "6";
  }
}

function addSeven() {
  if (x.innerHTML.length < len) {
    x.innerHTML += "7";
  }
}

function addEight() {
  if (x.innerHTML.length < len) {
    x.innerHTML += "8";
  }
}

function addNine() {
  if (x.innerHTML.length < len) {
    x.innerHTML += "9";
  }
}
