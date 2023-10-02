//tradicional function no param

function printName() {
  console.log("Lucas");
}

//tradicional function with param

function calcofLegalAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

let filmGenre = "";

//arrow function with param

let favoriteFilmGenreAndName = (value1, value2) => {
  filmGenre = value2;
  return `O nome do filme é ${value1} e o gênero é ${value2}`;
};

//aplication

let result = favoriteFilmGenreAndName("Frankenstein", "terror");
let age = 18;

if (filmGenre === "terror" && calcofLegalAge(age)) {
  printName();
  console.log(result + ", você pode assistir");
} else if (filmGenre !== "terror" && calcofLegalAge(age) === false) {
  printName();
  console.log(result + ", você pode assistir");
} else if (filmGenre !== "terror" && calcofLegalAge(age) === true) {
  printName();
  console.log(result + ", você pode assistir");
} else {
  printName();
  console.log(result + ", você não pode assistir");
}
