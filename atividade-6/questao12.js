import readline from "readline-sync"

let multiplicador = parseFloat(readline.question(`Informe o multiplicador `));


for(let i =1; i <= 10; i++){
    console.log(`${i}X${multiplicador}=${i*multiplicador}`)
}