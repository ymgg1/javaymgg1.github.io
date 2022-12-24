document.getElementById("next").onclick = stepNext;
document.getElementById("back").onclick = stepBack;

let firstPic = document.getElementById("first");
let secondPic = document.getElementById("second");
let thirdPic = document.getElementById("third");
let fourthPic = document.getElementById("fourth");
let fivthPic = document.getElementById("fivth");
let sixthPic = document.getElementById("sixth");
let seventhPic = document.getElementById("seventh");

let position = 1;

function check() {
  if (position == 1) {
    firstPic.className = "show";
    secondPic.className = "hidden";
    thirdPic.className = "hidden";
    fourthPic.className = "hidden";
    fivthPic.className = "hidden";
    sixthPic.className = "hidden";
    seventhPic.className = "hidden";
  } else if (position == 2) {
    firstPic.className = "hidden";
    secondPic.className = "show";
    thirdPic.className = "hidden";
    fourthPic.className = "hidden";
    fivthPic.className = "hidden";
    sixthPic.className = "hidden";
    seventhPic.className = "hidden";
  } else if (position == 3) {
    firstPic.className = "hidden";
    secondPic.className = "hidden";
    thirdPic.className = "show";
    fourthPic.className = "hidden";
    fivthPic.className = "hidden";
    sixthPic.className = "hidden";
    seventhPic.className = "hidden";
  } else if (position == 4) {
    firstPic.className = "hidden";
    secondPic.className = "hidden";
    thirdPic.className = "hidden";
    fourthPic.className = "show";
    fivthPic.className = "hidden";
    sixthPic.className = "hidden";
    seventhPic.className = "hidden";
  } else if (position == 5) {
    firstPic.className = "hidden";
    secondPic.className = "hidden";
    thirdPic.className = "hidden";
    fourthPic.className = "hidden";
    fivthPic.className = "show";
    sixthPic.className = "hidden";
    seventhPic.className = "hidden";
  } else if (position == 6) {
    firstPic.className = "hidden";
    secondPic.className = "hidden";
    thirdPic.className = "hidden";
    fourthPic.className = "hidden";
    fivthPic.className = "hidden";
    sixthPic.className = "show";
    seventhPic.className = "hidden";
  } else if (position == 7) {
    firstPic.className = "hidden";
    secondPic.className = "hidden";
    thirdPic.className = "hidden";
    fourthPic.className = "hidden";
    fivthPic.className = "hidden";
    sixthPic.className = "hidden";
    seventhPic.className = "show";
  }
}

function stepNext() {
  position += 1;
  if (position > 7) {
    position = 7;
  }
  check();
}
function stepBack() {
  position -= 1;
  if (position < 1) {
    position = 1;
  }
  check();
}
