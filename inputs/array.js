import texto from 'readline-sync';

let frases = [
    {id: 0, frase: "Olá, tudo bem?"},
    {id: 1, frase: "Sim, estou aqui!"},
    {id: 2, frase: "Acredito que estou correto!"},
    {id: 3, frase: "Muito bem, você conseguiu."}
];

console.log("0 - Frase 1");
console.log("1 - Frase 2");
console.log("2 - Frase 3");
console.log("3 - Frase 4");

let escolha = texto.question("Escolha uma opção:");

console.log(frases[escolha].frase);