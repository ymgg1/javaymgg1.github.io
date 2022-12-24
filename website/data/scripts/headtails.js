let coin = document.querySelector(".coin");
coin.onclick = flip;
let headsCount = 0;
let tailsCount = 0;
let rimCount = 0;

const head = document.getElementById("headsCount");
const tail = document.getElementById("tailsCount");
const rim = document.getElementById("rimCount");

const hPerc = document.getElementById("hPercent");
const tPerc = document.getElementById("tPercent");
const rPerc = document.getElementById("rPercent");

const history = document.getElementById("history");

const flipAmount = document.getElementById("step");
flipAmount.value = 1;

let historyCount = 1;

head.innerHTML = headsCount;
tail.innerHTML = tailsCount;
rim.innerHTML = rimCount;

function headtails() {
  let result = Math.round(Math.random() * 1000) / 1000;
  console.log(result);
  if (result > 0.5) {
    coin.innerHTML = "Орел";
    headsCount += 1;
    head.innerHTML = headsCount;
    history.innerHTML += "<option disabled>Орел №" + historyCount + "</option>";
  } else if (result < 0.5) {
    coin.innerHTML = "Решка";
    tailsCount += 1;
    tail.innerHTML = tailsCount;
    history.innerHTML +=
      "<option disabled>Решка №" + historyCount + "</option>";
  } else if (result == 0.5) {
    coin.innerHTML = "Ребро";
    rimCount += 1;
    rim.innerHTML = rimCount;
    history.innerHTML +=
      "<option disabled>Ребро №" + historyCount + "</option>";
  }

  historyCount += 1;

  hPerc.innerHTML = Math.round(
    (headsCount / (headsCount + tailsCount + rimCount)) * 100
  );

  tPerc.innerHTML = Math.round(
    (tailsCount / (headsCount + tailsCount + rimCount)) * 100
  );

  rPerc.innerHTML =
    Math.round((rimCount / (headsCount + tailsCount + rimCount)) * 1000000) /
    10000;
}

function flip() {
  if (flipAmount.value > 500) {
    flipAmount.value = 500;
  } else if (flipAmount.value < 1) {
    flipAmount.value = 1;
  }
  for (var i = 0; i < flipAmount.value; i++) {
    headtails();
  }
}
