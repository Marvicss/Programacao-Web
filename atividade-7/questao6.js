import readline from "readline-sync"
let qntNumeros = parseFloat(readline.question(`Informe a quantidade de numeros a ser lido:  `));

let numeros = [];

for(let i = 0; i < qntNumeros; i++){
    numeros[i] = parseFloat(readline.question(`Informe o ${i+1}º nuemero: `));
}

for(let i = 0; i < numeros.length; i++){
    if((!numeros[i] >= 0 && !numeros[i] <= 1000)){
        console.log("Digite numeros entre 0 e 1000")
        break

    }
      
}

let menor = 0
let maior = 0;
let soma = 0;


for (let i = 0; i < numeros.length; i++) {
    let num = numeros;
    soma += num[i];
    if (num < menor) {
        menor = num;
    }
    if (num > maior) {
        maior = num;
    }
}

console.log(`O menor numero é : ${menor}`);
console.log(`O maior numero é : ${maior}`);
console.log(`A soma dos numeros é : ${soma}`);