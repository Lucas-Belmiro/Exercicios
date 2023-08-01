// Desenvolva um código que simule uma eleição com três candidatos.
// - candidato_X => 889
// - candidato_Y => 847
// - candidato_Z => 515
// - branco => 0

// O código deve perguntar se deseja finalizar a votação depois do voto. Caso o número do voto não corresponda a nenhum candidato ou seja branco, ele deve ser tratado como nulo. Se for inserido um texto ao invés de número, o código deve retornar uma mensagem para votar novamente.

// Quando a votação for finalizada, o código deverá mostrar o vencedor, aquele com o maior número de votos e, também, a quantidade de votos de cada candidato, os brancos e nulos.

// Realize essa atividade, suba esse arquivo em um drive com link público e compartilhe o link no campo ao lado para que outros desenvolvedores possam analisá-lo.

listCandidates = {
  candidato_X: { voteNumber: 889, amountVotes: 0 },
  candidato_Y: { voteNumber: 847, amountVotes: 0 },
  candidato_Z: { voteNumber: 515, amountVotes: 0 },
  branco: 0,
  nulos: 0,
};

let electionsOn = true;

while (electionsOn == true) {
  let vote = parseInt(
    window.prompt("Digite o número do seu candidato ou 0 para nulo")
  );

  if (vote === listCandidates.candidato_X.voteNumber) {
    listCandidates.candidato_X.amountVotes += 1;
    window.alert("Voto registrado!");
  } else if (vote === listCandidates.candidato_Y.voteNumber) {
    listCandidates.candidato_Y.amountVotes += 1;
    window.alert("Voto registrado!");
  } else if (vote === listCandidates.candidato_Z.voteNumber) {
    listCandidates.candidato_Z.amountVotes += 1;
    window.alert("Voto registrado!");
  } else if (vote === 0) {
    listCandidates.branco += 1;
    window.alert("Voto registrado!");
  } else {
    listCandidates.nulos += 1;
    window.alert("Voto NULO registrado!");
  }

  let endProgram = parseInt(
    window.prompt("Deseja encerrar a votação? Digite 1 para SIM e 2 para NÃO")
  );
  if (endProgram === 1) {
    let myArray = [
      listCandidates.candidato_X.amountVotes,
      listCandidates.candidato_Y.amountVotes,
      listCandidates.candidato_Z.amountVotes,
    ];
    let winnerVotes = Math.max.apply(null, myArray);
    let winner;

    if (
      (winnerVotes === listCandidates.candidato_X.amountVotes &&
        winnerVotes === listCandidates.candidato_Y.amountVotes) ||
      (winnerVotes === listCandidates.candidato_X.amountVotes &&
        winnerVotes === listCandidates.candidato_Y.amountVotes &&
        winnerVotes === listCandidates.candidato_Z.amountVotes)
    ) {
      winner = "inexistente (aguarde o segundo turno)";
    } else if (winnerVotes === listCandidates.candidato_X.amountVotes) {
      winner = "candidato X";
    } else if (winnerVotes === listCandidates.candidato_Y.amountVotes) {
      winner = "candidato Y";
    } else if (winnerVotes === listCandidates.candidato_Z.amountVotes) {
      winner = "candidato Z";
    }

    window.alert(
      `O candidato X teve ${listCandidates.candidato_X.amountVotes} votos, O candidato Y teve ${listCandidates.candidato_Y.amountVotes} votos, O candidato Z teve ${listCandidates.candidato_Z.amountVotes} votos. Foram ${listCandidates.branco} votos brancos e ${listCandidates.nulos} nulos. O vencedor é o ${winner}`
    );
    electionsOn = false;
  }
}
