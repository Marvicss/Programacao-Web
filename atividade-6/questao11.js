import readline from 'readline-sync'


let numero1 = parseFloat(readline.question(`Informe o 1º número: `));
let numero2 = parseFloat(readline.question(`Informe o 2º número: `));

let listaNumeros = [];
let somaNumeros = 0;

for(numero1; numero1 <= numero2; numero1++){
    listaNumeros.push(numero1);
}

for(let i = 0; i < listaNumeros.length;i++){
    somaNumeros = somaNumeros + listaNumeros[i];
}

console.log(`A soma dos numeros é : ${somaNumeros}`)