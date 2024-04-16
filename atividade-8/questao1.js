
function recursiva(num){
   if(num == 1){
    return 1;
   }else{
    return num + recursiva(num - 1);
   }
}

const resultado = recursiva(5);
console.log(`O resultado da soma é : ${resultado}`);