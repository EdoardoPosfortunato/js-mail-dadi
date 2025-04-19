// Creazione di una Array Randomica

const randomArray = [];
const numeroOggetti = 10;

//Range

let min = 1;
let max = 100;

// let min = prompt("Dammi il Minimo");
// let max = prompt("Dammi il Massimo");

for (let i = 1; i <= numeroOggetti; i++) {
    let numero = Math.floor((Math.random() * (max - min) + min + 1))
    randomArray.push(numero)
}

console.table(randomArray)


// ESERCIZIO 13
// Trovare il secondo valore più grande in un array.


let massimo = - Infinity
let massimoSecond = - Infinity

for (let m = 0; m < randomArray.length; m++) {

    if (randomArray[m] > massimo) {
        
        massimoSecond = massimo
        massimo = randomArray[m];
    }

    else if (randomArray[m] > massimoSecond && randomArray[m] < massimo) {

        massimoSecond = randomArray[m];

    }
}

//OUTPUT 

console.log(massimo)
console.log(massimoSecond)
