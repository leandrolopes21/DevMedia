let pessoas = [
    { nome: 'Leandro Alcides Lopes', idade: 40},
    { nome: 'Lucas Moreira Lopes', idade: 12},
    { nome: 'Marize Moreira de Freitas', idade: 40}
];

// Estrutura de repetição for..of - utilizada para percorrer o array e exibir suas propriedade
/*
for (let pessoa of pessoas) {

    let nome = pessoa.nome;
    let idade = pessoa.idade;

    console.log("\nMe chamo " + nome + " e tenho " + idade + " anos!");
}
*/

// Estrutura de repetição for..in - utilizada para percorrer o array e informar suas posições
for (let qtde in pessoas) {

    console.log(qtde); // Mostrando as posições do array
}