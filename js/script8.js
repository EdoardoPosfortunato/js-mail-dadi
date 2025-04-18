// Creazione di una Array Randomica

const randomArray = [];
const numeroOggetti = 10;

//Range

let min = 1;
let max = 10;

// let min = prompt("Dammi il Minimo");
// let max = prompt("Dammi il Massimo");

for (let i = 1; i <= numeroOggetti; i++) {
    let numero = Math.floor((Math.random() * (max - min) + min + 1))
    randomArray.push(numero)
}

console.table(randomArray)


//ESERCIZIO 8
// Creare un array in cui ogni numero è il doppio di quello originale. (senza uso di .map)


let arrayDoppia = []

for (let i = 0; i < randomArray.length; i++) {

        arrayDoppia.push(randomArray[i] * 2)

}

console.table(arrayDoppia)
