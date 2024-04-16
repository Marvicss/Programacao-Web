

function recursivaDividindo(num){
    if(num == 1){
        return 1
    }else{
        return (1 / num) + recursivaDividindo(num - 1);
    }
}

const resultado = recursivaDividindo(5);
console.log(`O resultado da soma é : ${resultado}`)