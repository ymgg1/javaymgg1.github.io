const calculator = {
  calculating() {
    let firstNum = parseInt(document.getElementById("firstnumber").value);
    let secondNum = parseInt(document.getElementById("secondnumber").value);
    let operator = document.getElementById("operators").selectedIndex;
    let answer = document.getElementById("answerField");

    if (operator == 0) {
      answer.value = firstNum + secondNum;
      answer.title = answer.value;
    } else if (operator == 1) {
      answer.value = firstNum - secondNum;
      answer.title = answer.value;
    } else if (operator == 2) {
      answer.value = firstNum / secondNum;
      answer.title = answer.value;
    } else if (operator == 3) {
      answer.value = firstNum * secondNum;
      answer.title = answer.value;
    } else if (operator == 4) {
      answer.value = secondNum ** (1 / firstNum);
      answer.title = answer.value;
    }
  },
  resetField() {
    let firstNum = document.getElementById("firstnumber");
    let secondNum = document.getElementById("secondnumber");
    let operator = document.getElementById("operators");
    let answer = document.getElementById("answerField");

    firstNum.value = "";
    secondNum.value = "";
    answer.value = "";
    operator.selectedIndex = 0;
  },
};

document.getElementById("equal").onclick = calculator.calculating;
document.getElementById("reset").onclick = calculator.resetField;
