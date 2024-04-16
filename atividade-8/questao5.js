function numeroPell(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return 2 * numeroPell(n - 1) + numeroPell(n - 2);
}

const N = 5; 
console.log(`O ${N}-ésimo número na sequência de Pell é: ${numeroPell(N)}`);
