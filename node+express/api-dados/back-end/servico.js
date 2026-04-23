// Camada de serviço
// Este arquivo contém a lógica de negócios da aplicação.
// Ele interage com a camada de dados para processar e retornar informações.

// Importa o módulo de dados que contém os fatos históricos.
const dados = require('./dados');

/**
 * Retorna uma mensagem de fato histórico para um determinado ano.
 * @param {string} ano - O ano para o qual se busca um fato histórico.
 * @returns {string} Uma string contendo o fato histórico ou uma mensagem de "não encontrado".
 */
function retornaMensagemAno(ano) {
    // Procura no array fatosHistoricos por um item cujo ano corresponda ao parâmetro.
    const fatoEncontrado = dados.fatosHistoricos.find(item => item.ano === ano);

    // Se um fato for encontrado, retorna o fato; caso contrário, retorna uma mensagem padrão.
    let fato = fatoEncontrado ? fatoEncontrado.fato : "Nenhum fato histórico relevante encontrado para este ano no nosso banco de dados.";
    return fato;
}

/**
 * Valida se um parâmetro fornecido é um número.
 * @param {any} parametro - O valor a ser validado.
 * @returns {boolean} True se o parâmetro for um número, false caso contrário.
 */
function validaParametro(parametro) {
    // isNaN retorna true se o valor NÃO for um número. Queremos o oposto para validação.
    return !isNaN(parametro);
}

// Exporta as funções para que possam ser utilizadas por outros módulos (ex: camada de controle/rota).
exports.retornaMensagemAno = retornaMensagemAno;
exports.validaParametro = validaParametro;