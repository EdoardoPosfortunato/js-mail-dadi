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
