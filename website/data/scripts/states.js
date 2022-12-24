document.getElementById("btn").onclick = answering;

const USA = {
  capital: "Вашингтон",
  continent: "Пн. Америка",
  language: "Англійська*",
};

const Ukraine = {
  capital: "Київ",
  continent: "Сх. Європа",
  language: "Українська",
};

const Egypt = {
  capital: "Каїр",
  continent: "Пн. Африка",
  language: "Арабська",
};

const China = {
  capital: "Пекін",
  continent: "Азія",
  language: "Мандарин",
};

const Brazil = {
  capital: "Бразиліа",
  continent: "Пд. Америка",
  language: "Португальска",
};

function answering() {
  firstValue = document.getElementById("country").selectedIndex;
  secondValue = document.getElementById("option").selectedIndex;
  answerField = document.getElementById("answer");
  answerField.title = "";

  if (firstValue == 0) {
    country = Ukraine;
  } else if (firstValue == 1) {
    country = USA;
  } else if (firstValue == 2) {
    country = Egypt;
  } else if (firstValue == 3) {
    country = China;
  } else if (firstValue == 4) {
    country = Brazil;
  }

  if (secondValue == 0) {
    answerField.value = country.capital;
  } else if (secondValue == 1) {
    answerField.value = country.continent;
  } else if (secondValue == 2) {
    answerField.value = country.language;
  }

  if (country.language == "Англійська*") {
    answerField.title = "Де-юре державної мови немає";
  }
}
