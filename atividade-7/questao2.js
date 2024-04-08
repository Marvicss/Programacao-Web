import readline from "readline-sync"


let numeros = [];
let impar =0;
let par= 0;


for(let i =0; i < 10; i++){
    numeros[i] = parseFloat(readline.question(`Informe o ${i+1}º nuemero: `));
}

for(let i =0; i <=10; i++){
    if(numeros[i]%2 === 0){
        par++
    }else{
        impar++
    }
}

console.log(`A quantidade de numeros impares foi : ${impar} e a quantidade de numeros pares foi : ${par}`)