// Faça uma função calculadora de dois números com três parâmetros: os dois primeiros serão os números da operação e o terceiro será a entrada que definirá a operação a ser executada. Considera a seguinte definição:
// 1. Soma
// 2. Subtração
// 3. Multiplicação
// 4. Divisão

// Caso seja inserido um número de operação que não exista, o resultado deverá ser 0.

// Trabalhe esse código em seu IDE, suba ele para sua conta no GitHub e compartilhe o link desse projeto no campo ao lado para que outros desenvolvedores possam analisá-lo.

let num1, num2, operator;

function calculator(num1, num2, operator) {
  let result;

  if (operator === 1) {
    result = num1 + num2;
  } else if (operator === 2) {
    result = num1 - num2;
  } else if (operator === 3) {
    result = num1 * num2;
  } else if (operator === 4) {
    if (num2 !== 0) {
      result = num1 / num2;
    } else {
      result = 0;
    }
  } else {
    result = 0;
  }
  return result;
}

console.log(calculator(2, 2, 4));
