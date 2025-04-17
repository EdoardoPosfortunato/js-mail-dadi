# Esercizio Email

## Spiegazione Esercizio

Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Non è necessario provvedere alla validazione delle email.
NON USARE INCLUDES!

## Uman Code

1) ==Raccolta Dati==
Attraverso un prompt chieder all'utente l'username.
2) ==Esecuzione Logica==
nella fase di esecuzione logica: 
- [x] creiamo un **Array** che abbia al suo interno tutti gli utenti che hanno accesso
- [x] creare una variabile let con all'interno non ha accesso
- [x] far un **ciclo for** con un if all'interno e ad ogni ripetizione controllare se l'**username** fornito è unguale all'elemento [i] dell'array; in caso affermativo sostituire nella variabile **control** "non ha accesso" con "ha accesso" (bonus-rendere tutto maiuscolo in modo tale da non avere problemi di maiuscole o minuscole)
3) ==Output==
Stampare la variabile control, che nel caso abbia trovato nell'array il nome fornito è diventato "ha accesso", in caso contrario è rimasto "non ha accesso"

# Esercizio Dadi

## Spiegazione Esercizio

Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

## Uman Code

1) ==Raccolta Dati==
creare due variabili e assegnargli due numeri randomici
creare una variabile **winner** vuota che servirà per stampare il risultato
2) ==Esecuzione Logica==
con un if capire quale dei due dati sia magggiore dell'altro (o uguali)
3) ==Output==
stampare la variabile winner

(**bonus**: inserire quante sfide vuoi che vengano fatte)