function tribonacci(n) {
    if (n === 0 || n === 1) return 0;
    if (n === 2) return 1;

    return tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
}

const N = 5; 
console.log(`O ${N}-ésimo número na sequência de Tribonacci é: ${tribonacci(N)}`);
