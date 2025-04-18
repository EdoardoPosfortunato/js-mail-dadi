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


// ESERCIZIO 6
// Calcolare la differenza tra il numero più grande e quello più piccolo in un array.

let minimo = ""
let massimo = ""

for (let m = 0; m < randomArray.length; m++){
    
    if(minimo === ""){
        minimo = randomArray[m];
    } else if (randomArray[m] < minimo){
        minimo = randomArray[m];
    }

    if(massimo === ""){
        massimo = randomArray[m];
    } else if (randomArray[m] > massimo){
        massimo = randomArray[m];
    }
}

//OUTPUT 

console.log(minimo)
console.log(massimo)
console.log(`${massimo} - ${minimo} = ${massimo - minimo}`)
