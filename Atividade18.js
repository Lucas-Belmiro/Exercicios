let value1 = parseFloat(prompt("insira o primeiro número"));
let operator = prompt("insira o operador");
let value2 = parseFloat(prompt("insira o segundo número"));

function calcAverage(value1, value2, operator) {
  switch (operator) {
    case "+":
      return value1 + value2;
      break;
    case "-":
      return value1 - value2;
      break;
    case "*":
      return value1 * value2;
      break;
    case "/":
      if (value1 % value2 === 0) {
        return value1 / value2;
        break;
      } else {
        return `${parseInt(value1/value2)} e sobra: ${value1 % value2}` ;
        break;
      }
  }
}

let result = calcAverage(value1, value2, operator);

alert("O reusltado da operação é: " + result);