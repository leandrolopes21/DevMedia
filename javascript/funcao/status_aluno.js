// Função com parâmetro para verificar status do aluno
// Quando precisamos de uma função que precisa receber valores para usá-los no seu código, usamos funções com parâmetro

function retorna_status_aluno(nota1, nota2) {

    let media = (nota1 + nota2) / 2;
    let resultado;

    if (media >= 6) {

        resultado = "Aprovado!";

    } else {

        resultado = "Reprovado!";

    }

    return resultado;
}

let status_aluno_1 = retorna_status_aluno(7, 6);
let status_aluno_2 = retorna_status_aluno(5, 6);

console.log(`Aluno 1: ${status_aluno_1}`);
console.log(`Aluno 2: ${status_aluno_2}`);