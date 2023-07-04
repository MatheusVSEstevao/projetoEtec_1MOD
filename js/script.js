let numberA = "";
let numberB = "";
let numberC = "";
let inputStage = "a";

function enterNumber(num) {
  const display = document.getElementById("message");
  if (inputStage === "a") {
    numberA += num.toString();
    display.innerText = "Digite o número a: " + numberA;
  } else if (inputStage === "b") {
    numberB += num.toString();
    display.innerText = "Digite o número b: " + numberB;
  } else if (inputStage === "c") {
    numberC += num.toString();
    display.innerText = "Digite o número c: " + numberC;
  }
}

function enterNegative() {
  const display = document.getElementById("message");
  if (inputStage === "a" && numberA === "") {
    numberA = "-";
    display.innerText = "Digite o número a: " + numberA;
  } else if (inputStage === "b" && numberB === "") {
    numberB = "-";
    display.innerText = "Digite o número b: " + numberB;
  } else if (inputStage === "c" && numberC === "") {
    numberC = "-";
    display.innerText = "Digite o número c: " + numberC;
  }
}

function deleteNumber() {
  const display = document.getElementById("message");
  if (inputStage === "a") {
    numberA = numberA.slice(0, -1);
    display.innerText = "Digite o número a: " + numberA;
  } else if (inputStage === "b") {
    numberB = numberB.slice(0, -1);
    display.innerText = "Digite o número b: " + numberB;
  } else if (inputStage === "c") {
    numberC = numberC.slice(0, -1);
    display.innerText = "Digite o número c: " + numberC;
  }
}

function nextNumber() {
  const display = document.getElementById("message");
  if (inputStage === "a") {
    if (numberA !== "") {
      inputStage = "b";
      display.innerText = "Digite o número b:";
    }
  } else if (inputStage === "b") {
    if (numberB !== "") {
      inputStage = "c";
      display.innerText = "Digite o número c:";
    }
  } else if (inputStage === "c") {
    if (numberC !== "") {
      calculateEquation();
    }
  }
}

function calculateEquation() {
  const display = document.getElementById("message");
  // Verificar se os números foram inseridos corretamente
  if (numberA === "" || numberB === "" || numberC === "") {
    display.innerText = "Por favor, insira todos os números.";
    return;
  }

  // Converter os números para tipo numérico
  const a = parseFloat(numberA);
  const b = parseFloat(numberB);
  const c = parseFloat(numberC);

  // Verificar se a é igual a zero (equação de 1º grau)
  if (a === 0) {
    display.innerText = "Esta é uma equação de 1º grau.";
    return;
  }

  // Verificar se a equação de 2º grau está incompleta
  if (b === 0 || c === 0) {
    display.innerText = "Equação de 2º grau incompleta.";
    return;
  }

  // Calcular o delta
  const delta = b * b - 4 * a * c;

  // Verificar o valor de delta
  if (delta < 0) {
    display.innerText = "Não pertence a Raíz real.";
  } else {
    // Calcular as raízes
    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);
    display.innerText = "As raízes são: x1 = " + x1 + ", x2 = " + x2;
  }
}

function resetCalculator() {
  numberA = "";
  numberB = "";
  numberC = "";
  inputStage = "a";
  const display = document.getElementById("message");
  display.innerText = "Digite o número a:";
}
