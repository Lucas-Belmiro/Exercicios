// Desenvolva um programa que recebe do usuário nome completo e ano de nascimento que seja entre 1922 e 2021. A partir dessas informações, o sistema mostrará o nome do usuário e a idade que completou, ou completará, no ano atual (2022).

// Caso o usuário não digite um número ou apareça um inválido no campo do ano, o sistema informará o erro e continuará perguntando até que um valor correto seja preenchido.

// Realize essa atividade, suba esse arquivo em um drive com link público e compartilhe o link no campo ao lado para que outros desenvolvedores possam analisá-lo.

let validateYear = false;

let name = window.prompt("insira o nome");

while (validateYear == false) {
  // take the year of birthday (1922-2021)

  let yearBirthday = parseInt(
    window.prompt("insira o ano de nascimento (1922-2021)")
  );

  if (yearBirthday >= 1922 && yearBirthday <= 2021) {
    let result = 2022 - yearBirthday;
    window.alert(`O seu nome é ${name}. Em 2022, a sua idade será ${result}`);
    validateYear = true;
  }
}
