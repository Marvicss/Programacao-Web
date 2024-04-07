// Menu bancario

let opcao = 1
let saldo = 500;
let saque = 200;
let valorDeposito = 300;
let saldoDestino = 300;
let valorTranferencia = 150;
let limiteTransferencia = 200;
let cadastroAtivo = true;
let historicoCredito = true;
let rendaMensal = 1500
let menu = true;

while(menu){
    console.log("Digite as seguintes opções:");
    console.log("[1] - Verificar saldo");
    console.log("[2] - Realizar saque");
    console.log("[3] - Deposito em conta");
    console.log("[4] - Transferencia entre conta");
    console.log("[5] - Cheque especial");
    console.log("[6] - Atualizar Cadastro");
    console.log("[7] - Limite de Credito");
    console.log("[8] - Sair");

    switch(opcao){
        case 1: 
            console.log(verificarSaldo(saldo));
        case 2:
            console.log(realizarSaque(saldo, saque));
        case 3:
            console.log(realizarDeposito(saldo,valorDeposito ));
        case 4:
            console.log(realizarTransferencia(saldo,saldoDestino,valorTranferencia,limiteTransferencia ));
        case 5: 
            console.log(checarChequeEspecial(saldo));
        case 6: 
            console.log(atualizarCadastro(cadastroAtivo,saldo));
        case 7: 
            console.log(avaliarCredito(saldo,historicoCredito,rendaMensal));
        case 8:
            menu = false;
    }
}

