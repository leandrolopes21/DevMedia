// Camada de serviço
// Recebe um ano como parâmetro e retorna uma mensagem relacionada

const dados = require('./dados');

function retornaMensagemAno(ano) {
    const fatoEncontrado = dados.fatosHistoricos.find(item => item.ano === ano);

    let fato = fatoEncontrado ? fatoEncontrado.fato : "Nenhum fato histórico relevante encontrado para este ano no nosso banco de dados.";
    return fato;

    // return fatoEncontrado;
}

function validaParametro(parametro) {

    if (isNaN(parametro)) {
        return false;
    } else {
        return true;
    }
}

exports.retornaMensagemAno = retornaMensagemAno;
exports.validaParametro = validaParametro;