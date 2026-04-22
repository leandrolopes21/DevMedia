let aluno = {nome: "Marcos", email: "marcos@email.com", idade: 25};

/* todo essa conjunto pode ser substituído pela estrutura for..in
console.log(aluno.nome);
console.log(aluno.email);
console.log(aluno.idade);
*/

for (let valor in aluno) {

    console.log(aluno[valor]);
}