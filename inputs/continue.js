let alunos = [
    {id: 1, nome: "Leandro", media: 5},
    {id: 2, nome: "Lucas", media: 5},
    {id: 3, nome: "Marize", media: 6},
    {id: 4, nome: "Laura", media: 7}
];

let contador = 0;

while ( contador < alunos.length) {

    let aluno = alunos[contador];

    contador++;

    if ( aluno.media < 6) {
        continue;
    }

    console.log("Id: " + aluno.id);
    console.log("Nome: " + aluno.nome);
    console.log("Média: " + aluno.media);
    console.log("\n");
}