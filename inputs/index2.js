import digitar from 'readline-sync';

let num1 = digitar.question("Digite um número: ");

if (Number(num1) % 2 === 0) {
    console.log("O número informado é par");
} else {
    console.log("O número informado é ímpar");
}