import readline from "readline-sync"

let base = parseFloat(readline.question(`Informe a base: `));
let expoente = parseFloat(readline.question(`Informe a expoente: `));
let resultado =1;

for(let i =0; i < expoente; i++){
    resultado *= base;
}

console.log(resultado);