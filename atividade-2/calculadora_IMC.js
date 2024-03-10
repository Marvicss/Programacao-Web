
const peso = prompt();
const altura = prompt();
const imc = peso / (altura * altura);

console.log(peso);
console.log(altura);


if(imc < 18.5){
    console.log("Abaixo do peso");
} else if (imc >= 18.5 && imc <= 24.9){
    console.log("Peso normal");
} else if (imc >= 25 && imc <= 29.9){
    console.log("Excesso de peso");
} else if (imc >= 30 && imc <=34.9){
    console.log("Obesidade grau I");
} else if( imc >= 35 && imc <=39.9){
    console.log("Obesidade grau II");
} else if ( imc >= 40){
    console.log("Obesidade grau III");
} else{
    console.log("Falha ao calcular o IMC, tente novamente!")
}

