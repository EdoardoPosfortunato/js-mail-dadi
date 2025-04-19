// Creazione di una Array Randomica

const randomArray = [];
const numeroOggetti = 10;

for (let i = 1; i <= numeroOggetti; i++) {
    let numero = Math.floor((Math.random() * 10 + 1))
    randomArray.push(numero)
}

console.table(randomArray)

// ESERCIZIO 17
// Sommare tutti i numeri che si trovano in posizione pari (0, 2, 4…) ma solo se il numero è dispari.

let sommaTot = 0;
let rigaSomma = "";

console.log(`I numeri che verranno sommati saranno`)

for (let i = 0; i < randomArray.length; i++) {

    if (randomArray[i] % 2 !== 0 && i % 2 === 0) {

        sommaTot = randomArray[i] + sommaTot
        console.log(randomArray[i])

        if (rigaSomma === "") {
            rigaSomma = randomArray[i];
        } else  {
            rigaSomma = rigaSomma + " + " + randomArray[i];
        }
    }
}


console.log(`${rigaSomma} = ${sommaTot}`)
