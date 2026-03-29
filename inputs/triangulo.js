import triangulo from 'readline-sync';

console.log("\nCalcular a área do triângulo.\n");

let base = triangulo.question("Digite o valor da base: ");
let altura = triangulo.question("Digite o valor da altura: ");

let area = (base * altura) / 2;

console.log("\nÁrea do triângulo = " + area);