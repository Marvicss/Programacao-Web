let loop = true;    

while(loop){
    
    if(numero >= 0 && numero <=16){

        var numero = parseInt(prompt("Digite um número inteiro para calcular o fatorial:"));

        if (numero < 0) {
            return "Erro: Não é possível calcular o fatorial de um número negativo.";
        }
        
        if (numero === 0 || numero === 1) {
            return 1;
        }
        
        var fatorial = 1;
        
        for (var i = numero; i > 1; i--) {
            fatorial *= i;
        }
    }else{
        console.log("O numero digitado é invalido, digite um numero entre 0 e 16");
    }
    
    
    

}

console.log("O fatorial de " + numero + " é: " + fatorial);