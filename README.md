# Fizz Buzz

## Spiegazione Esercizio

Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per?
Abbiamo visto qualcosa di particolare che possiamo usare?
Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"


## Uman Code

1) ==Raccolta Dati==
Non abbiamo dati una fase di raccolta dati
2) ==Esecuzione Logica==
nella fase di esecuzione logica: 
- [x] dobbiamo fare un **ciclo for** che vada da i=1 fino a i <= 100 e per ogni ciclo aumenta di uno.
- [x] all'interno **3 if nidificati**:
    - il primo per capire se il numero è divisibile per 5 e per 3; in caso affermativo stampare FizzBuzz: in caso negativo fare il secondo if.
    - il secondo if per capire se sia divisibile per 3; in caso affermativo stampare Fizz; in caso negativo passare al successivo if.
    - il terzo if per capire se sia divisibile per 5; in caso affermativo stampare Buzz; in caso negativo stampare il numero (i).
3) ==Output==
L'utput saranno i numeri da 1 a 100 e quelli divisibili per 3 avranno al suo posto scritto Fizz, quelli divisibili per 5 avranno scritto Buzz e quelli che sono divisibili per entrambi avranno scritto Fizz Buzz 
