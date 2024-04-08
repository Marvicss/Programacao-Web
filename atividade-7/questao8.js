

let number = parseInt(prompt("Digite um número"));
    
if (number <= 1) {
   console.log("O nuemro não é primo")
}else if ( numer >1){
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            console.log("O numero não é primo");
        }
    }
}else{
    console.log("O nuemro é primo")
}

    
    



