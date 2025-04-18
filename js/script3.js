// Creazione di una Array Randomica

const randomArray = [];
const numeroOggetti = 6;

for (let i = 1; i <= 6; i++) {
    let numero = Math.floor((Math.random() * 10 + 1))
    randomArray.push(numero)
}

console.log(randomArray)


//ESERCIZIO 3
// Creare un nuovo array con gli elementi in ordine inverso (senza usare .reverse()).

const newArray = [];

for (let i = 0; i < randomArray.length; i++){
    newArray.push(randomArray[randomArray.length - i - 1])
}

console.log(newArray)

//oppure

const newArray2 = [];

for (let i = randomArray.length - 1; i >= 0; i--){
    newArray2.push(randomArray[i])
}

console.log(newArray2)