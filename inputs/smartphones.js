import aparelho from 'readline-sync';

let colecao_smartphones = [
    {id: 0, nome: "Galaxy S20"},
    {id: 1, nome: "Surface Duo"},
    {id: 2, nome: "iPhone 12"},
    {id: 3, nome: "Google Pixel"}
];

console.log("\n0 - Galaxy S20");
console.log("1 - Surface Duo");
console.log("2 - iPhone 12");
console.log("3 - Google Pixel");

let smartphone = aparelho.question("\nDigite o id do aparelho que deseja: ");

console.log("\nVocê escolheu o smartphone: " + colecao_smartphones[smartphone].nome);