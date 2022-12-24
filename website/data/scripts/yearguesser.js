document.querySelector("#submit").onclick = answering;

function answering() {
  let a = document.getElementById("age").value;
  let b = document.getElementById("answer");

  if (a == "") {
    b.value = "Введіть Ваш вік";
  } else if (a > 200) {
    b.value = "Стільки люди не живуть";
  } else if (a > 122) {
    b.value = "Ти найстаріша людина в світі";
  } else if (a > 0) {
    b.value = a;
  } else {
    b.value = "З днем народження!";
  }
}
