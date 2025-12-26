// Subcamada responsável por filtrar os feriados

function filtraFeriados(feriados, numeroFeriados) {

    const dataAtual = new Date(); // Retorna data atual do sistema
    const anoAtual = dataAtual.getFullYear(); // Retorna apenas o ano atual conforme a data atual do sistema

    let proximosFeriados = [];
    let novaDataFeriado;

    /*
    A filtragem dos feriados começa percorrendo o array de feriados e adicionando ao ano as datas correspondentes
    */
    feriados.forEach(feriado => {

        novaDataFeriado = new Date(feriado.data + '/' + anoAtual);

        /*
        Se a data do feriado já tiver passado, ela é colocada para o próximo ano
        */
        if (dataAtual > novaDataFeriado) {
            novaDataFeriado.setFullYear(anoAtual + 1);
        }

        /*
        Com as datas definidas é criado um novo array, com o mesmo conteúdo, mas desta vez com a data completa e no formato Date do JavaScript
        */
        proximosFeriados.push({
            nome: feriado.nome,
            data: novaDataFeriado
        });
    });

    /*
    Usado o método sort() para ordenar o array por data, e depois o método slice() para retornar o número desejado de feriados
    */
    proximosFeriados = proximosFeriados.sort((a, b) => a.data - b.data);
    proximosFeriados = proximosFeriados.slice(0, numeroFeriados);

    return proximosFeriados;
}

export default filtraFeriados;