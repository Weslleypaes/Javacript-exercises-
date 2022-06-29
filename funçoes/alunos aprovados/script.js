const alunos = [
    {
        nome: 'Pedro',
        nota: 8,
        turma: '1B',
    },
    {
        nome: 'Carol',
        nota: 4,
        turma: '1B',
    },
    {
        nome: 'Paula',
        nota: 7,
        turma: '2C',
    },
    {
        nome: 'Cassandra',
        nota:2,
        turma: '2C',
    }
];

function alunosAprovados(arr,media){
    let aprovados = [];

    for(let i = 0; i < arr.length; i++ ){

        const {nota, nome} = arr[i];   //object destructuring 

        if(nota >= media){
            aprovados.push(nome);
        }
    }
    return aprovados;
}

console.log(alunosAprovados(alunos,7));