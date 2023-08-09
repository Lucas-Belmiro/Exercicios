// Nesta atividade, você deve criar um código em JavaScript com uma matriz bidimensional para armazenar informações sobre animais e as suas características.

// Cada linha deve representar um animal e cada coluna terá as diferentes informações sobre ele, como nome, espécie e idade.


let animalFeatures = [
  ["cavalo", "onça", "camelo"],
  ["dócil", "feroz", "dócil"],
  ["25 anos", "10 anos", "30 anos"],
];

for (let j = 0; j < animalFeatures.length; j++) {
  for (let i = 0; i < animalFeatures.length; i++) {
    if (j === 0 && i === 0) {
      console.log(
        `O ${animalFeatures[i][j]} é ${animalFeatures[i + 1][j]} e tem ${
          animalFeatures[i + 2][j]
        }`
      );
    } else if (j === 1 && i === 0) {
      console.log(
        `O ${animalFeatures[i][j]} é ${animalFeatures[i + 1][j]} e tem ${
          animalFeatures[i + 2][j]
        }`
      );
    } else if (j === 2 && i === 0) {
      console.log(
        `O ${animalFeatures[i][j]} é ${animalFeatures[i + 1][j]} e tem ${
          animalFeatures[i + 2][j]
        }`
      );
    }
  }
}

// Output: 

// O cavalo é dócil e tem 25 anos
// O onça é feroz e tem 10 anos
// O camelo é dócil e tem 30 anos