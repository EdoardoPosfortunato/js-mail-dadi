// ESERCIZIO 15
// Restituire la stringa più lunga da un array.

const parole = ["elefante", "sole", "albero", "casa", "gigante", "debugging", "lunghezza"];
let parolaLunga = "";
let lunghezzParolaLunga = - Infinity;

// console.log(parolaLunga.length)

for (let i = 0; i < parole.length; i++) {

    // console.log(parole[i].length)
    // console.log(`La parola ${parole[i]} in posizione ${i} ha ${parole[i].length} lettere`)

    if (lunghezzParolaLunga < parole[i].length) {

        parolaLunga = parole[i]
        lunghezzParolaLunga = parolaLunga.length


    } else if (lunghezzParolaLunga === parole[i].length) {

        parolaLunga = parolaLunga + ", " + parole[i]

    }

}

//OUTPUT

if (parolaLunga.length === lunghezzParolaLunga) {

    console.log(`La parola più lunga è - ${parolaLunga} -`);
} else {

    console.log(`Le parole più lunghe sono - ${parolaLunga} -`)
}

