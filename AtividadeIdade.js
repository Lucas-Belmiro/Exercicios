let nome = window.prompt("Digite o nome da pessoa");

let anoDeNascimento = window.prompt("Digite o ano de nascimento");

while (
  anoDeNascimento === "" ||
  isNaN(anoDeNascimento) ||
  anoDeNascimento < 1922 ||
  anoDeNascimento > 2021
) {
  try {
    if (anoDeNascimento === "") throw new TypeError("campo Vazio");
    if (isNaN(anoDeNascimento)) throw new TypeError("Não é um número válido");
    if (anoDeNascimento < 1922 || anoDeNascimento > 2021)
      throw new RangeError("Fora do Intervalo");
  } catch (err) {
    console.log ("erro: " + err + ".");
  } finally{
    anoDeNascimento = window.prompt("Digite o ano de nascimento");
  }

}

if (anoDeNascimento >= 1922 && anoDeNascimento <= 2021) {
  let idadeAtual = 2022 - anoDeNascimento;

  alert(`A idade atual é: ${idadeAtual}`);
  document.getElementById("printNome").innerHTML = `O nome é ${nome}`;
}
