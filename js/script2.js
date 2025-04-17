// const colori = ["rosso", "blu", "rosso", "verde", "rosso"];

// const ricerca = "rosso"


//CREARE UN ARRAY di COLORI RANDOM dato un insime di colori DATO

const coloriConosciuti = ["rosso", "blu", "giallo", "verde", "arancio", "viola"]
const coloriRandom = [];
for (let i = 1; i <= 6; i++){
    coloriRandom.push(coloriConosciuti[Math.floor((Math.random() * coloriConosciuti.length))])
}
console.table(coloriRandom)

//ESERCIZIO

const ricerca = "rosso"
// const ricerca = prompt("Dammi un colore da cercare")

console.log(ricerca);

let contatore = 0;

for (let n = 0; n < coloriRandom.length; n++) {

    if (coloriRandom[n] === ricerca) {
        contatore = contatore + 1; 
    }
}

console.log(`Il numero di volte che appare il ${ricerca} è ${contatore}`)



