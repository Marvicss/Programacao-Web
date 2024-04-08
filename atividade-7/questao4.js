function calcularFatorial(numero) {
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
    
    return fatorial;
}

var numero = parseInt(prompt("Digite um número inteiro para calcular o fatorial:"));

var resultado = calcularFatorial(numero);

console.log("O fatorial de " + numero + " é: " + resultado);
