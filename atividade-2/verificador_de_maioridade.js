
console.log("Digite a sua data de nascimento");
const DataAniversario = new Date(prompt());
const DataAtual = new Date();

const idade = DataAniversario.getFullYear() - DataAtual.getFullYear();

if(idade < 18){
    console.log("Usuário menor de idade")
} else {
    console.log("Usuário é maior de idade")
}
