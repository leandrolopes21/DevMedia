function retornaStatusAluno(nota1, nota2) {
    let media = (nota1 + nota2) / 2;
    let status_aluno = "";

    if (media >= 6) {
        status_aluno = "Aprovado";
    } else {
        status_aluno = "Reprovado";
    }
    return status_aluno;
}

console.log(retornaStatusAluno(8, 5));