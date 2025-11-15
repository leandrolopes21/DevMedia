// Crie um código que some as notas dos alunos e imprima a média:
// qntAlunos recebe a quantidade de elementos do array alunosAv1. (Utilize uma propriedade para isso).
// A média é o resultado da divisão da soma das notas pela quantidade de alunos.

const alunosAv1 = [
    { nome: 'Ana', nota: 7},
    { nome: 'Maria Eduarda', nota: 2},
    { nome: 'Tiago', nota: 8},
    { nome: 'Yuri', nota: 3},
];

const qntAlunos = alunosAv1.length;
let somaNotas = 0;

for ( const aluno of alunosAv1 ) {
    somaNotas += aluno.nota;
}

const media = somaNotas / qntAlunos;

console.log(`Média dos alunos: ${media}`);

