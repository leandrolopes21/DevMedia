// Importa as funções 'somaNumeros' e 'subtracaoNumeros' do arquivo vizinho 'funcoes.js'.
// Isso permite que este arquivo (main.js) utilize as funções definidas lá.
import {somaNumeros, subtracaoNumeros} from "./funcoes";

// Declara e inicializa duas variáveis que serão usadas como entrada para as funções.
let numero1 = 10;
let numero2 = 5;

// Chama a função importada 'somaNumeros', passando as variáveis como argumentos,
// e armazena o valor retornado (15) na constante 'soma'.
const soma = somaNumeros(numero1, numero2);

// Faz o mesmo para a função 'subtracaoNumeros' e armazena o resultado (5) na constante 'subtracao'.
const subtracao = subtracaoNumeros(numero1, numero2);

// Exibe os resultados das operações no console do navegador ou no terminal.
console.log("A soma entre os números é: " + soma); // Irá imprimir "A soma entre os números é: 15"
console.log("A subtração entre os números é: " + subtracao); // Irá imprimir "A subtração entre os números é: 5"