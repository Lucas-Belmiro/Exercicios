// Considere o array [3, 7, 9, 1, 0].

// O primeiro elemento inserido foi o 3, o segundo foi o 7 e assim por diante, seguindo a ordem.

// Levando em conta as três estruturas de dados (fila, lista e pilha) e as suas regras de operações, qual seria a sequência dos números removidos em cada uma delas para esvaziá-las completamente utilizando o array mencionado?

//Lista (é possível acessar os elementos pelo índice)

console.log(
  "resposta: Na lista, iremos excluir de acordo com o índice e a escolha poderia variar em conformidade com o que o usuário quer. Na fila, o primeiro elemento a entrar seria o primeiro a sair, ou seja, a sequência de saída seria 3, depois 7 e assim até terminarem os itens da fila. Por fim, na pilha, o primeiro elemento a entrar é o último a sair, a sequência de saída começaria com 0, depois 1 e assim segue até não restarem itens na pilha."
);

// A seguir algumas aplicações desse conceito.

//Exemplo de lista

const lista = [];

function inserir(elemento, posicao = lista.length) {
  if (posicao >= 0 && posicao <= lista.length) {
    lista.splice(posicao, 0, elemento); //Array.splice(inicio, removeCount, novoItem, novoItem, novoItem, ...)
    return true;
  } else {
    return false;
  }
}

function estaVaziaLista() {
  return lista.length === 0;
}

function remover(elemeto) {
  const indice = lista.indexOf(elemeto);
  if (indice !== -1) {
    lista.splice(indice, 1);
    return true;
  } else {
    return false;
  }
}

function buscar(elemento) {
  const indice = lista.indexOf(elemento);

  if (indice !== -1) {
    return indice;
  } else {
    return null;
  }
}

function atualizar(posicao, novoElemento) {
  if (posicao >= 0 && posicao < lista.length) {
    lista[posicao] = novoElemento;
    return true;
  } else {
    return false;
  }
}

function tamanhoLista() {
  return lista.length;
}

inserir(10);
inserir(20, 0);
inserir(30, 1);

console.log(lista);

remover(30);
console.log(lista);

console.log(buscar(10));

atualizar(1, 40);

console.log(lista);

//Fila (primeiro elemento a entrar é o primeiro a sair)

const fila = [];

function enfileirar(element) {
  fila.push(element);
}

function estaVaziaFila() {
  return fila.length === 0;
}

function desenfileirar() {
  if (estaVaziaFila()) {
    return null;
  }

  return fila.shift();
}
function frenteDaFila() {
  if (estaVaziaFila()) {
    return null;
  }

  return fila[0];
}

function tamanhoFila() {
  return fila.length;
}

enfileirar(1);
enfileirar(2);
enfileirar(3);

console.log(fila);

desenfileirar();

console.log(fila);

//Pilha (primeiro elemento a entrar é o último a sair)

const pilha = [];

function empilhar(elemento) {
  pilha.push(elemento);
}

function estavazia() {
  return pilha.length === 0;
}

function desempilhar() {
  if (estavazia()) {
    return null;
  }

  return pilha.pop();
}

function topo() {
  if (estavazia()) {
    return null;
  }

  return pilha(pilha.length - 1);
}

function tamanho() {
  return pilha.length;
}

empilhar(10);
empilhar(20);
empilhar(30);

console.log(pilha);

desempilhar();

console.log(pilha);
