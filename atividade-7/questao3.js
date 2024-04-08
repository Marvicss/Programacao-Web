function fibonacciAteN(n) {
    let fibonacci = [1, 1];
    
    for (let i = 2; i < n; i++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }
    
    return fibonacci;
}


function fibonacciAteMaiorQue500() {
    let fibonacci = [0, 1];
    let i = 2;
    
    while (fibonacci[i - 1] + fibonacci[i - 2] <= 500) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
        i++;
    }
    
    return fibonacci;
}

console.log("Série de Fibonacci até o 10º termo:", fibonacciAteN(10));
console.log("Série de Fibonacci até que o valor seja maior que 500:", fibonacciAteMaiorQue500());