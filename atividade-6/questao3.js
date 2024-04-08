
let nome = 'Marconi';
let idade = 25;
let salario = 1000;
let sexo = "m";
let estadoCivil = "s";


if((nome.length >= 3) && (idade >=0 && idade <= 150) && (salario >= 0) && (sexo === "f" || sexo ==="m") && (estadoCivil === 's' || estadoCivil === 'c' || estadoCivil === 'v' || estadoCivil === 'd') ){
    console.log("informações valida");
}else{
    console.log("informações invalidas");
}