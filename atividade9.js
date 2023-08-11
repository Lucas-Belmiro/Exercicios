// Temos o array [15, 8, 10, 25, 12, 30, 5, 20, 18, 7] e precisamos criar um código em JavaScript para encontrar o valor 20.

// Para isso, temos que escolher entre realizar uma busca linear ou binária de acordo com a que for mais adequada para essa situação.

// Codifique a solução mais eficiente para buscar o número 20 no array.

// Realize essa atividade, suba esse arquivo em um drive com link público e compartilhe o link no campo ao lado para que outros desenvolvedores possam analisá-lo.

// A busca linear foi mais adequada, uma vez que os valores do array não estão ordenados

function valueSearch(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i; // Returns the index where the value was found
    }
  }
  return -1; // Returns -1 if value not found in array
}

const array = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7];
const fetchedValue = 20;

const index = valueSearch(array, fetchedValue);

if (index !== -1) {
  console.log(`O valor ${fetchedValue} foi encontrado no índice ${index}.`);
} else {
  console.log(`O valor ${fetchedValue} não foi encontrado no array.`);
}
