// if - else - else if

const nota = 8;
const bomComportamento = true;

if(nota >= 7 && bomComportamento){
    console.log("Parabens");
}
if(nota < 7 || !bomComportamento){
    console.log("Uma pena");
}else{
    console.log("A nota passada é invalida")
}

console.log("Fim");