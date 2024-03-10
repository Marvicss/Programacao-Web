
const lado1 = prompt();
const lado2 = prompt();
const lado3 = prompt();
const isValid = false;


if (lado1 + lado2 > lado3){
    isValid = true;
}else{
    isValid = false;
}

if(isValid){

    if(lado1 === lado2 === lado3){
        console.log("Triangulo Equilatero");
    }
    else if(lado1 != lado2 != lado3){
        console.log("Triangulo Escaleno")
    }
    else{
        console.log("Triangulo Isosceles")
    }
}else{
    console.log("O tringulo informado não é valido")
}