import readline from 'readline-sync'

let numeros = [];

for (let i = 0; i < 5; i++) {
    
    let numero = parseFloat(readline.question(`Informe o ${i+1}º número: `));
    
   
    numeros.push(numero);
}

let soma = 0;

for(let i =0; i < 5;i++){
    soma = soma + numeros[i];
}

let media = soma / numeros.length;

console.log("A media é : ", media)