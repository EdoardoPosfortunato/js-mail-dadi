// Creazione di una Array Randomica

const randomArray = [];
const numeroOggetti = 6;

//Range

let min = 1;
let max = 100;

// let min = prompt("Dammi il Minimo");
// let max = prompt("Dammi il Massimo");

for (let i = 1; i <= numeroOggetti; i++) {
    let numero = Math.floor((Math.random() * (max - min + 1) + min))
    randomArray.push(numero)
}

console.table(randomArray)


//ESERCIZIO 4
// Stampare il valore più piccolo in un array di numeri.

let minimo = ""

for (let i = 0; i < randomArray.length; i++){
    
    if(minimo === ""){
        minimo = randomArray[i];
    } else if (randomArray[i] < minimo){
        minimo = randomArray[i];
    }
}

console.log(minimo);
console.log(typeof minimo);