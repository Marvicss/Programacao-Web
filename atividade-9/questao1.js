
const alunos = [
    {id:1,
    nome: 'joao',
    nota: 5},
    {id:2,
    nome: 'maria',
    nota: 8},
    {id:3,
    nome: 'pedro',
    nota: 7},
    {id:4,
    nome: 'tiago',
    nota: 8}
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
        somaNotas = somaNotas + aluno.nota;
    });
    return somaNotas / alunosArr.lenght;
}