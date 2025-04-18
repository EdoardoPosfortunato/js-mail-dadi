// Creazione di una Array Randomica

const randomArray = [];
const numeroOggetti = 10;

//Range


for (let i = 1; i <= numeroOggetti; i++) {
    /*let numero = Math.random()
    if(numero < 0.5){
        randomArray.push(true)
    } else {
        randomArray.push(false)
    }*/
   
    let randomNumb = Math.random() < 0.5;
    randomArray.push(randomNumb)
    
}

console.table(randomArray)

//ESERCIZIO 7
// Contare quanti elementi true ci sono in un array di booleani.

let contatore = 0

for (let  i = 0; i < randomArray.length; i++){
    
    if(randomArray[i] === true){
        contatore++;
    } 
}

console.log(contatore)