import readline from "readline-sync"
let n = parseFloat(readline.question(`digite um numero:`));

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false;
        }
        i += 6;
    }
    return true;
}

function findPrimesAndDivisions(n) {
    let primes = [];
    let divisions = 0;

    for (let i = 2; i <= N; i++) {
        if (isPrime(i)) {
            primes.push(i);
            divisions++; 
        }
    }

    return { primes, divisions };
}

const { primes, divisions } = findPrimesAndDivisions(N);

console.log("Números primos entre 1 e", N, ":");
console.log(primes);
console.log("Número de divisões realizadas:", divisions);
