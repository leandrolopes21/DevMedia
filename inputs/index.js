import entradaDados from 'readline-sync';

console.log("Calculadora");

let num1 = entradaDados.question("Digite o número que deseja ver a tabuada: ");

for (let contador = 0; contador <= 10; contador++) {
    let resultado = num1 * contador;
    console.log(num1 + " x " + contador + " = " + resultado);
}