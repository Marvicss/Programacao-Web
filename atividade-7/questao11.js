import readline from "readline-sync"

let numNotas = parseFloat(readline.question(`digite o numero de notas que será fornecida:`));
let notas = [];
let total = 0;

for(let i = 0; i < numNotas; i++){
    notas[i] = parseFloat(readline.question(`digite a ${i + 1}º nota: `));
}

for(let i =0; i < notas.length;i++){
    total += notas[i];
}

let media = total / notas.length;

console.log("A media das notas é : ", media);

