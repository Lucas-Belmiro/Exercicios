// Faça, utilizando o Google Blockly, uma função calculadora que os números e as operações serão feitas pelo usuário. O código deve ficar rodando infinitamente até que o usuário escolha a opção de sair. No início, o programa mostrará a seguinte lista de operações:
// 1: Soma
// 2: Subtração
// 3: Multiplicação
// 4: Divisão
// 0: Sair

// Digite o número para a operação correspondente e caso o usuário introduza qualquer outro, o sistema deve mostrar a mensagem “Essa opção não existe” e voltar ao menu de opções.

// Após a seleção, o sistema deve pedir para o usuário inserir o primeiro e segundo valor, um de cada. Depois precisa executar a operação e mostrar o resultado na tela. Quando o usuário escolher a opção “Sair”, o sistema irá parar.

let exitProgram = false;

while (exitProgram !== true) {
  let option = window.prompt(
    "1: Soma, 2: Subtração, 3:Multiplicação, 4: Divisão, 0: Sair"
  );

  if (option == 1) {
    number1 = window.prompt("insira o primeiro numero");
    number2 = window.prompt("insira o segundo numero");

    result = parseFloat(number1) + parseFloat(number2);

    console.log(result);
  } else if (option == 2) {
    number1 = window.prompt("insira o primeiro numero");
    number2 = window.prompt("insira o segundo numero");

    result = parseFloat(number1) - parseFloat(number2);

    console.log(result);
  } else if (option == 3) {
    number1 = window.prompt("insira o primeiro numero");
    number2 = window.prompt("insira o segundo numero");

    result = parseFloat(number1) * parseFloat(number2);

    console.log(result);
  } else if (option == 4) {
    number1 = window.prompt("insira o primeiro numero");
    number2 = window.prompt("insira o segundo numero");
    if (number2 !== 0) {
      result = parseFloat(number1) / parseFloat(number2);
      console.log(result);
    }
  } else if (option == 0) {
    exitProgram = true;
  }
}
