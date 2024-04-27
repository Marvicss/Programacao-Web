
const alunos = [
    {id:1,
    valor: {
    nome: 'joao',
    nota: 8
    }},


   {id:2,
    valor: {
    nome: 'maria',
    nota: 7
    }},
    
    
    {id:3,
    valor: {
    nome: 'pedro',
    nota: 5
    }},


    {id:4,
    valor: {
    nome: 'jose',
    nota: 8
    }}
]

function adicionarnovoaluno(aluno){
    if(aluno != null && aluno != undefined){
        alunos.push(aluno);
        console.log("aluno adicionado com sucesso");
    }else{
        console.log("Não foi possivel adicionar o aluno, tente novamente")
    }
}

function buscarporid(id){
    return alunos.filter((id) =>{
        alunos.id = id;
    })
}

function calcularMedia(alunosArr){
    const somaNotas = 0;
    alunosArr.array.forEach(aluno => {
        somaNotas = somaNotas + aluno.valor.nota;
    });
    return somaNotas / alunosArr.lenght;
}