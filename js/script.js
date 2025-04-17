//ESERCIZIO SOMMA PARI


// Creazione di una Array Randomica

const randomArray = [];
const numeroOggetti = 6;

for (let i = 1; i <= 6; i++) {
    let numero = Math.floor((Math.random() * 10 + 1))
    randomArray.push(numero)
}

console.log(randomArray)

//ESERCIZIO

let somma = 0
let rigaSomma = ""

for (let i = 0; i < randomArray.length; i++) {

    if (randomArray[i] % 2 === 0) {
        somma = somma + randomArray[i];

        if (rigaSomma === "") {

            rigaSomma = rigaSomma + randomArray[i];

        } else {

            rigaSomma = rigaSomma + " + " + randomArray[i];
        }
    }
}

console.log(`${rigaSomma} = ${somma}`)
console.log(somma)





















































