// ESERCIZIO 16
// Controllare se i numeri sono in ordine crescente.

const numeri = [1, 2, 3, 4, 5, 6];

let contatore = 0;
let controllo = - Infinity;

for(let i = 0; i < numeri.length; i++) {

    if (numeri[i] >= controllo) {

        controllo = numeri[i]
        contatore++

    }
}

if (contatore === numeri.length) { 
    
    console.log(`È in ordine crescente`) }

else {

    console.log(`NON è in ordine crescente`)

}

//OPPURE

let crescente = true;

for (let i = 0; i < numeri.length -1; i++) {

  if (numeri[i] > numeri[i + 1]) {
    
    crescente = false;
    break;

  }
}

if (crescente) {
  console.log("L'array è in ordine crescente");
} else {
  console.log("L'array NON è in ordine crescente");
}