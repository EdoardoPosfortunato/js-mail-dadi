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


//ESERCIZIO 11
//Calcolare la media dei numeri, poi contare quanti sono sopra la media.

let sommaTot = 0;

for (let i = 0; i < numeroOggetti; i++) {
    sommaTot = sommaTot + randomArray[i]
}

let media = sommaTot / randomArray.length
console.log(media);

let arraySopraMedia = []

for (let i = 0; i < numeroOggetti; i++) {
    
    if(randomArray[i] > media){
        arraySopraMedia.push(randomArray[i])
    }
}

console.table(arraySopraMedia)


