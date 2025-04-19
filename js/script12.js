//creare un numero randomico

const randomArray = [];
const numeroOggetti = 5;

//Range

let min = 0;
let max = 9;

// let min = prompt("Dammi il Minimo");
// let max = prompt("Dammi il Massimo");

for (let i = 1; i <= numeroOggetti; i++) {
    let numero = Math.floor((Math.random() * (max - min) + min + 1))
    randomArray.push(numero)
}

let numeroIntero = Number(randomArray.join(""))

console.log(numeroIntero)


//ESERCIZIO 12
//Sommare tutte le cifre di un numero (es: 472 → 4+7+2)

let somma = 0;
let rigaSomma = "";

let numeroInteroStr = numeroIntero.toString()
console.log(numeroInteroStr)


for (let i = 0; i < numeroInteroStr.length ; i++) {

    if(rigaSomma === ""){
        rigaSomma = numeroInteroStr[i];

    } else {
        
        rigaSomma = rigaSomma + " + " + numeroInteroStr[i];
    }
   
    somma = somma + Number(numeroInteroStr[i])
   
}

console.log(`${rigaSomma} = ${somma}`)

