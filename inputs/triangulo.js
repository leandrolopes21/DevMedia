// Aplicação para calcular a área de um triângulo
import calcular from 'readline-sync';

console.log("\nVamos calcular a área de um triângulo!\n");

let base = calcular.question("Digite a base do triângulo: ");
let altura = calcular.question("Digite a altura do triângulo: ");

let area = (Number(base) * Number(altura)) / 2;

console.log(`\nA área do triângulo é: ${area}\n`);