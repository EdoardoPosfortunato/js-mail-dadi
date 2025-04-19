//ESERCIZIO 14
// Calcolare la somma solo dei numeri dispari in un array che contiene anche stringhe o altri tipi.

const dati = [3, "ciao", 4, true, 7, 2];

let rigaSomma = "";
let sommaTot = 0;

for (let n = 0; n < dati.length; n++) {

    if (!isNaN(dati[n]) && dati[n] % 2 !== 0 && typeof dati[n] !== "boolean") {
        
        sommaTot = sommaTot + dati[n]; 

        if(rigaSomma === ""){
            rigaSomma = dati[n];
        } else {
            rigaSomma = rigaSomma + " + " + dati[n];
        }

    }
}

console.log(`${rigaSomma} = ${sommaTot}`);

console.log(`La somma dei numeri dispari è ${sommaTot}`)