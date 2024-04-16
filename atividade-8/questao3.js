function potencia(x, k) {
    if (k === 0) {
        return 1;
    }
    if (k === 1) {
        return x;
    }
    let meio = (k / 2) >> 0; 
    let temp = potencia(x, meio);
    
    if (k % 2 === 0) {
        return temp * temp;
    } else {
        return temp * temp * x;
    }
}

const resultado = potencia(3,2);
console.log(`O resultado da potencia é : ${resultado}`);