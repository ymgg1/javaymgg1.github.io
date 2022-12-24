document.getElementById("sub").onclick = logining;
const checkBox = document.getElementById("rem");
checkBox.onchange = showPass;
const checkBoxType = document.getElementById("pass");

function showPass() {
  if (checkBox.checked) {
    checkBoxType.type = "text";
  } else {
    checkBoxType.type = "password";
  }
}

function logining() {
  let name = document.getElementById("name").value;
  let password = document.getElementById("pass").value;

  if (name == "Name" && password == "pass") {
    window.location.href = "data/main.html";
  } else {
    let error = document.getElementById("error");
    error.innerHTML = "Wrong password or username";
  }
}
