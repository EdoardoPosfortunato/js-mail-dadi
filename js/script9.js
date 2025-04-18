//ESERCIZIO 9
// Data una stringa, contare quante vocali contiene (a, e, i, o, u). PS: che cosa succede se qualche vocale è maiuscola? 😉


const word = "aIUoLa"
console.warn(`Quante vocali contiene la parola ${word}?`);

console.log(word)

const vocali = ["a", "e", "i", "o", "u"]

// console.log(vocali[1].toUpperCase())

let contatore = 0;

//CON 2 CICLIFOR

// for (let n = 0; n < vocali.length; n++) {
//     for (let i = 0; i < word.length; i++) {
//         if (word[i] === vocali[n] || word[i] === vocali[n].toUpperCase()) {
//             contatore = contatore + 1;
//         }
//     }
// }

// console.log(`La parola ${word} è composta da ${contatore} vocali`)

for (let n = 0; n < word.length; n++) {

            if (vocali.includes(word[n].toLowerCase())) {
                contatore = contatore + 1;
            }

    }
    
    console.log(`La parola ${word} è composta da ${contatore} vocali`)