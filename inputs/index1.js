import inputDados from 'readline-sync';

console.log("Bem vindo a calculadora");

let x = inputDados.question("Informe o valor de x: ");
let y = inputDados.question("Informe o valor de y: ");

let soma = Number(x) + Number(y);
let sub = Number(x) - Number(y);
let mult = Number(x) * Number(y);
let div = Number(x) / Number(y);

console.log("Os resultados são: ");
console.log("Soma: " + soma);
console.log("Subtração: " + sub);
console.log("Multiplicação: " + mult);
console.log("Divisão: " + div);
