
// Saque em conta

function realizarSaque(saldoAtual, valorSaque){
    if(valorSaque <= saldoAtual){
        saldoAtual = saldoAtual - valorSaque;
        console.log("Saque realizado com sucesso, Saldo atual : " , saldoAtual);
    }else{
        console.log("Saldo insuficiente");
    }
}