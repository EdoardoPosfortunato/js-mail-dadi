// Creazione di una Array Randomica

const randomArray = [];
const numeroOggetti = 10;

//Range

let min = 1;
let max = 5;

// let min = prompt("Dammi il Minimo");
// let max = prompt("Dammi il Massimo");

for (let i = 1; i <= numeroOggetti; i++) {
    let numero = Math.floor((Math.random() * (max - min) + min + 1))
    randomArray.push(numero)
}

console.table(randomArray)


//ESERCIZIO 10
// Creare un nuovo array che contiene ogni valore una sola volta.

let result = [];

for (let i = 0; i < randomArray.length; i++) {

  if (result.indexOf(randomArray[i]) === -1) {
    result.push(randomArray[i]);
  }
  
}

console.log(result); 