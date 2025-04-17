// dato un username assicurarsi che abbia accesso
console.warn("Fornisci USERNAME e controllo si hai accesso")

let username = prompt('Inserisci Username')
console.log(username)

// const username = "saitama"
// console.log(username)

const listAdmin = ["saitama", "genos", "king", "silverfung"]

let control = "non ha accesso"

for(i = 0; i < username.length; i++){
    if (username === listAdmin[i])
        control = 'ha accesso'
    
}

console.log (`L'utente ${username} ${control}`)
console.error("---------------------------------------------------------------------------------------------------------------");
