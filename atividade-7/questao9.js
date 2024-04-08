
function ePrimo(numero) {
    if (numero <= 1) {
        return {
            ePrimo: false,
            divisores: []
        };
    }

    let divisores = [];

    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            divisores.push(i);
        }
    }

    if (divisores.length === 0) {
        return {
            ePrimo: true,
            divisors: []
        };
    } else {
        return {
            ePrimo: false,
            divisores: divisores
        };
    }
}

console.log(ePrimo(7));  
console.log(ePrimo(12));
