// Vamos construir uma coleção de objetos

import objeto from 'readline-sync';

console.log("\nBem vindo ao cadastro de livros!\n");

let livros = [
    {titulo: "O senhor dos anéis", autor: "J.R.R Tolkien", ano: 1954, editora: "HarperCollins"},
    {titulo: "1984",               autor: "George Orwell", ano: 1949, editora: "Companhia das Letras"},
];

console.log("Livro 0: O Senhor dos Anéis\n");
console.log("Livro 1: 1984\n");

let escolha = objeto.question("Qual livro cadastrado escolher - (0 ou 1)? ");

let livroEscolhido = livros[escolha];
console.log(livroEscolhido);
console.log("\n");