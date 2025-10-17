import numero from 'readline-sync';

console.log("Informe um número para iniciar a contagem:");
let num1 = numero.question("Número: ");
console.log("Informe um número para finalizar a contagem:");
let num2 = numero.question("Número: ");
console.log("Informe o passo da contagem:");
let passo = numero.question("Passo: ");

for (let contador = Number(num1); contador <= Number(num2); contador += Number(passo)) {
    console.log("Número: " + contador);
}

