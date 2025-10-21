import digitar from 'readline-sync';

console.log("\nCalculadora de IMC\n");
console.log("IMC = peso / altura²\n\n");

let peso = digitar.question("Digite seu peso: ");
let altura = digitar.question("Digite sua altura: ");

let imc = peso / (altura * altura);

if (imc < 18.5) {
    console.log("\nSeu IMC é " + imc.toFixed(2) + " - Magreza");
} else if (imc >= 18.5 && imc <= 24.99) {
    console.log("\nSeu IMC é " + imc.toFixed(2) + " - Normal");
} else if (imc >= 25 && imc <= 29.99) {
    console.log("\nSeu IMC é " + imc.toFixed(2) + " - Obesidade grau I");
} else if (imc >= 30 && imc <=39.99) {
    console.log("\nSeu IMC é " + imc.toFixed(2) + " - Obesidade grau II");
} else if (imc > 40) {
    console.log("\nSeu IMC é " + imc.toFixed(2) + " - Obesidade grau III - Grave");
} else {
    console.log("\nOpção inválida!");
}