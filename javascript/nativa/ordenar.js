// Array de números que será ordenado.
const numeros = [22, 10, 2, 1];

console.log('\nArray antes da ordenação ' + numeros + '\n');

/*
 * Função de comparação para o método 'sort'.
 * O método sort, por padrão, converte os elementos para strings e os ordena
 * em ordem de pontuação de código Unicode (alfabética). Para ordenar números
 * corretamente, é preciso fornecer uma função de comparação.
 *
 * Esta função é chamada pelo 'sort' com dois elementos do array (a, b) de cada vez.
 * O valor de retorno determina a ordem:
 * - Se retornar um valor < 0, 'a' vem antes de 'b'.
 * - Se retornar um valor > 0, 'b' vem antes de 'a'.
 * - Se retornar 0, a ordem original de 'a' e 'b' é mantida.
 *
 * @param {number} a - O primeiro elemento para comparação.
 * @param {number} b - O segundo elemento para comparação.
 * @returns {number} A diferença entre 'a' e 'b', que determinará a ordem.
 */
function ordenaNum(a, b) {
    // Estes console.log são para fins didáticos, mostrando os pares de elementos
    // que o método 'sort' está comparando em cada passo da ordenação.
    console.log("A: " + a);
    console.log("B: " + b);
    console.log('');

    // A expressão 'a - b' é um atalho comum para ordenação numérica crescente.
    return a - b;
}

// Chama o método 'sort' no array 'numeros', passando 'ordenaNum' como a lógica de comparação.
// O array 'numeros' é modificado (ordenado) no local.
numeros.sort(ordenaNum);

// Imprime o array ordenado no console.
console.log('Array após a ordenação ' + numeros + '\n'); // Saída esperada: [1, 2, 10, 22]

// console.info é similar ao console.log, mas em alguns navegadores pode adicionar um ícone de "informação".
console.info(numeros + '\n');