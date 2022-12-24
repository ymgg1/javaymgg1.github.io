let x = 0;

document.querySelector("progress").value = x;
document.querySelector("span").innerHTML = x;
document.querySelector("button").onclick = add;

function result(x) {
  document.querySelector("progress").value = x;
  document.querySelector("span").innerHTML = x;
}

function add() {
  b = parseInt(document.querySelector("input").value);

  if (isNaN(b)) {
    console.log("step in undefined");
  } else if (b < 0) {
    console.log("step can`t be negative number");
  } else if (x + b > 100) {
    x = 0;
    result(x);
  } else if (x < 100) {
    x += b;
    result(x);
  }
}
