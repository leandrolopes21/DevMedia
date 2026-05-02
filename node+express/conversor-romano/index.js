/**
 * Converte um número decimal em sua representação em numerais romanos.
 * @param {number} numero - O número inteiro a ser convertido.
 * @returns {string} O equivalente em algarismos romanos.
 */
function decimalParaRomano(numero) {
    // Tabela de mapeamento organizada do maior para o menor valor.
    // A ordem decrescente é fundamental para a lógica de subtração.
    const tabela = [
    { decimal: 1000, romano: 'M' },
    { decimal: 900, romano: 'CM' },
    { decimal: 500, romano: 'D' },
    { decimal: 400, romano: 'CD' },
    { decimal: 100, romano: 'C' },
    { decimal: 90, romano: 'XC' },
    { decimal: 50, romano: 'L' },
    { decimal: 40, romano: 'XL' },
    { decimal: 10, romano: 'X' },
    { decimal: 9, romano: 'IX' },
    { decimal: 5, romano: 'V' },
    { decimal: 4, romano: 'IV' },
    { decimal: 1, romano: 'I' }
  ];

  // Variável que acumulará os caracteres romanos.
  let resultado = '';

  // Percorre cada objeto da tabela de mapeamento.
  for (let i = 0; i < tabela.length; i++) {
    // Enquanto o número atual for maior ou igual ao valor decimal da tabela:
    while (numero >= tabela[i].decimal) {
        // 1. Adiciona o caractere romano correspondente ao resultado.
        resultado += tabela[i].romano;
        // 2. Subtrai o valor decimal já convertido do número original.
        numero -= tabela[i].decimal;
    }
  }

  // Retorna a string final com a representação romana.
  return resultado;
}

// Exemplo de uso: Converte 55 para 'LV'
console.log(decimalParaRomano(55))