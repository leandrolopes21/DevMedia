// Array de objetos, onde cada objeto representa um jogo com suas propriedades.
const jogos = [
  { id: 1, nome: 'Galaxian', anoLancamento: 1979, plataforma: 'Fliperama' },
  { id: 2, nome: 'Donkey Kong', anoLancamento: 1981, plataforma: 'Fliperama' },
  { id: 3, nome: 'Ms. Pac-Man', anoLancamento: 1981, plataforma: 'Fliperama' },
  { id: 4, nome: 'Payday 2 ', anoLancamento: 2011, plataforma: 'Xbox 360' },
  { id: 5, nome: 'God of War 4', anoLancamento: 2020, plataforma: 'PS4' },
  { id: 6, nome: 'Spider-Man: Miles Morales', anoLancamento: 2020, plataforma: 'PS4' },
];

/**
 * Imprime o nome e o ano de lançamento de um jogo no console.
 * @param {object} jogo - O objeto de jogo a ser impresso.
 * @param {string} jogo.nome - O nome do jogo.
 * @param {number} jogo.anoLancamento - O ano de lançamento do jogo.
 */
function imprimirJogo(jogo) {
    console.log(jogo.nome + ' - ' + jogo.anoLancamento);
}

/**
 * Função de callback para o método filter. Verifica se a plataforma de um jogo é 'Fliperama'.
 * @param {object} jogo - O objeto de jogo a ser verificado.
 * @returns {boolean} Retorna true se a plataforma do jogo for 'Fliperama', caso contrário, false.
 */
function retornaJogosFliperama(jogo) {
    return jogo.plataforma == 'Fliperama';
};

// Utiliza o método 'filter' para criar um novo array chamado 'jogosFliperama'.
// O novo array conterá apenas os jogos para os quais a função 'retornaJogosFliperama' retornar true.
const jogosFliperama = jogos.filter(retornaJogosFliperama);

// Itera sobre o array 'jogosFliperama' e chama a função 'imprimirJogo' para cada elemento,
// imprimindo no console o nome e o ano de lançamento de cada jogo de fliperama.
jogosFliperama.forEach(imprimirJogo);