let alunos = [
    {nome: 'Leandro', matricula: 132},
    {nome: 'Mariana', matricula: 245},
    {nome: 'Marize', matricula: 110},
    {nome: 'Lucas', matricula: 32},
];

// function tradicional

/*
function ordenaMatricula(a, b) {
    return a.matricula - b.matricula;
}

console.log('\nAntes da ordenação\n');
console.log(alunos);

alunos.sort(ordenaMatricula);

console.log('\nApós a ordenação - utilizando function tradicional\n');
console.log(alunos);
*/

// arrow function

console.log('\nAntes da ordenação\n');
console.log(alunos);

alunos.sort((a, b) => {
    return a.matricula - b.matricula;
});

console.log('\nApós a ordenação - utilizando arrow function\n');
console.log(alunos);

