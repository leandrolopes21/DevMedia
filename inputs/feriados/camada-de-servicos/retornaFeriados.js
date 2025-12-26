// Tem como função fornecer dados para camada de exibição
//import feriadosNacionais from
//import {formataDiaSemana, formataDataFeriado} from

function retornaProximosFeriados(numeroFeriados) {

    let feriadosFiltro = filtroFeriados(feriadosNacionais, numeroFeriados);
    let feriadosFiltroFormatados = [];

    feriadosFiltro.forEach(feriado => {
        const dataFeriado = feriado.data;
        let diaSemana = formataDiaSemana(dataFeriado);
        const dataFeriadoFormatada = formataData(dataFeriado);

        feriadosFiltroFormatados.push({
            nome: feriado.nome,
            diaSemana: diaSemana,
            data: dataFeriadoFormatada
        });
    });

    return feriadosFiltroFormatados;
}