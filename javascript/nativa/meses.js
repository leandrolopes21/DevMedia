// Array de strings que contém o nome de todos os meses do ano.
const meses = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

/*
 * Retorna os três primeiros caracteres de uma string (o nome do mês).
 * @param {string} mes - O nome do mês a ser abreviado.
 * @returns {string} A abreviação do mês (os 3 primeiros caracteres).
 */
function abreviar(mes) {
    // O método substr() retorna uma parte da string, começando no índice 0
    // e retornando os 3 caracteres seguintes.
    return mes.substr(0,3)
}

// Utiliza a função 'map' para percorrer cada item do array 'meses'.
// A função 'abreviar' é aplicada a cada mês, e o resultado é armazenado
// em um novo array chamado 'mesesAbreviados'.
const mesesAbreviados = meses.map(abreviar);

// Imprime o array com os meses abreviados no console.
console.log(mesesAbreviados);