/**
 * Função que recebe dois números e retorna a soma deles.
 * @param {number} num1 O primeiro número.
 * @param {number} num2 O segundo número.
 * @returns {number} A soma de num1 e num2.
 */
const somaNumeros = (num1, num2) => {
    return num1 + num2;
}

/**
 * Função que recebe dois números e retorna a subtração do segundo pelo primeiro.
 * @param {number} num1 O primeiro número (minuendo).
 * @param {number} num2 O segundo número (subtraendo).
 * @returns {number} A diferença entre num1 e num2.
 */
const subtracaoNumeros = (num1, num2) => {
    return num1 - num2;
}

// Exporta as funções 'somaNumeros' e 'subtracaoNumeros' para que possam ser importadas e utilizadas em outros módulos.
export {somaNumeros, subtracaoNumeros};