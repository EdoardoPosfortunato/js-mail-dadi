// DATO UN USERNAME VERIFICO ABBIA L'ACCESSO

console.error("Fornisci USERNAME e controllo si hai accesso")

// let username = prompt('Inserisci Username')
// console.log(username)

const username = "saitama"
console.log(username)

const listAdmin = ["saitama", "genos", "king", "silverfang"]

let control = "non ha accesso"

for (i = 0; i < username.length; i++) {
    if (username.toUpperCase() === listAdmin[i].toUpperCase())
        control = 'ha accesso'
    break;
}

console.log(`L'utente ${username} ${control}`)



// GENERO UN NUMERO RANDOM da 1 a 6 per due volte e GUARDO chi VINCE

console.error("Dare due numeri da 1 a 6 e vedere chi vince");


numUtente = Math.floor((Math.random() * 6 + 1));
numPC = Math.floor((Math.random() * 6 + 1))
if (numUtente > numPC) {
    winner = `Ha vinto l'Utente`
} else if (numUtente < numPC) {
    winner = `Ha vinto il PC`
} else {
    winner = `Pareggio`
}

console.log(`L'utente ha estratto ${numUtente}`)
console.log(`il PC ha estratto ${numPC}`)
console.warn(`${winner}`) 



// SE SI VOLESSE INSERIRE ANCHE IL NUMERO DI RIPETIZIONI DA FARE 

/* console.error("--------------------------")
console.error("Dare due numeri da 1 a 6 e vedere chi vince")

let numUtente
let numPC
let winner
let numRipetizioni = prompt("Inserisci il Numero di Ripetizioni") // se si vuole aumentare il numero di sfide

for (i = 1; i <= numRipetizioni; i++) {
    numUtente = Math.floor((Math.random() * 6 + 1));
    numPC = Math.floor((Math.random() * 6 + 1))
    if (numUtente > numPC) {
        winner = `Ha vinto l'Utente`
    } else if (numUtente < numPC) {
        winner = `Ha vinto il PC`
    } else {
        winner = `Pareggio`
    }

    console.log(`Prova numero ${i}`)
    console.log(`L'utente ha estratto ${numUtente}`)
    console.log(`il PC ha estratto ${numPC}`)
    console.warn(`${winner}`)
} */



