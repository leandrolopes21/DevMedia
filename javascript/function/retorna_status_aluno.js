// Executando função com parâmetro
// Quando é necessário utilizar uma função que recebe valores para usá-los no seu código, é utilizado função com parâmetro

/*
function retorna_status_aluno(nota1, nota2) {

    let media = (nota1 + nota2) / 2;
    let status;

    if (media >= 6) {
        status = "Aprovado";
    } else {
        status = "Reprovado";
    }

    return status;
}

let status_aluno_1 = retorna_status_aluno(7, 8);
console.log("Aluno 1: " + status_aluno_1);

let status_aluno_2 = retorna_status_aluno(4, 2);
console.log("Aluno 2: " + status_aluno_2);
*/

// Podemos escrever essa função no formato ** arrow function **

const retorna_status_aluno = (nota1, nota2) => {

    let media = (nota1 + nota2) / 2;
    let status;

    if (media >= 6) {
        status = "Aprovado";
    } else {
        status = "Reprovado";
    }

    return status;

}

let status_aluno_1 = retorna_status_aluno(7, 8);
console.log("Aluno 1: " + status_aluno_1);

let status_aluno_2 = retorna_status_aluno(4, 2);
console.log("Aluno 2: " + status_aluno_2);