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



//ESERCIZIO 5
// Sommare i numeri che si trovano in posizioni dispari dell’array.

let sommaTot = 0;

for (let n = 0; n < randomArray.length; n++) {

    if (n % 2 !== 0) {
        sommaTot = sommaTot + randomArray[n]; 
    }
}

console.log(`La somma dei numeri in posizione dispari è ${sommaTot}`)