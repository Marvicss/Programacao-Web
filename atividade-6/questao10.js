import readline from 'readline-sync'


let numero1 = parseFloat(readline.question(`Informe o 1º número: `));
let numero2 = parseFloat(readline.question(`Informe o 2º número: `));

for(numero1; numero1 <= numero2; numero1++){
    console.log(numero1);
}

