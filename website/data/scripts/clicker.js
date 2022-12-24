let counter = 0;
let hundreds = 0;
let thousands = 0;
let step = 1;

document.getElementById("screen").innerHTML = counter;
document.getElementById("clicker").onclick = iterate;
document.getElementById("hun").innerHTML = hundreds;
document.getElementById("tho").innerHTML = thousands;

document.querySelector(".boost").onclick = booster;

function booster() {
  step = parseInt(document.querySelector("input").value);
  if (step < 1) {
    step = 1;
    document.querySelector("input").value = 1;
  }
}

function iterate() {
  counter += step;
  console.log(counter);

  document.getElementById("screen").innerHTML = counter;

  hundreds = counter / 100;
  document.getElementById("hun").innerHTML = hundreds;

  thousands = counter / 1000;
  document.getElementById("tho").innerHTML = thousands;
}
