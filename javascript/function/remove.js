/*
    Este script demonstra como criar e usar uma função para remover
    espaços em branco desnecessários do início e do fim de uma string (texto).
*/

// Declara uma arrow function chamada 'remove_espacos'.
// Esta é uma forma concisa de escrever a função, pois ela tem apenas uma instrução de retorno.
// A função recebe um parâmetro 'texto'.
// O método .trim() é um método nativo de strings em JavaScript que remove
// os espaços em branco do início e do final da string.
const remove_espacos = (texto) => texto.trim();

// Declara uma variável 'mensagem' com uma string que contém espaços extras no início e no fim.
let mensagem = "   Estou aprendendo JavaScript      ";

// Chama a função 'remove_espacos', passando a 'mensagem' como argumento.
// O resultado (a string "limpa") é armazenado na variável 'resultado'.
let resultado = remove_espacos(mensagem);

// Imprime o conteúdo da variável 'resultado' no console.
// A saída será a string sem os espaços extras: "Estou aprendendo JavaScript"
console.log(resultado);