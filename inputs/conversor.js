// Importação do plugin readline-sync
// Necessário para implementação do input
import dado from 'readline-sync';

// Texto informativo para o usuário
console.log("\nConversor de Milhas para kilometros! \n");

// Nessa linha o input é implementado
// O valor informado é armazenado na variável mi, utilizada no cálculo de conversão
let mi = dado.question("Digite um valor em milhas: ");

// Cálculo de conversão, com resultado armazenado na variável km
let km = mi / 0.62137;

// Impressão do resultado na tela
console.log("\nValor em km = " + km);