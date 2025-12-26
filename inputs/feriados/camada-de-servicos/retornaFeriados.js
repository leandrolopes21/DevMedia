// Tem como função fornecer dados para camada de exibição
import feriadosNacionais from '../camada-de-apoio/dataFeriados.js';
import filtraFeriados from '../camada-de-apoio/filtros.js';
import {formataDiaSemana, formataDataFeriado} from '../camada-de-apoio/formataDataFeriado.js';

function retornaProximosFeriados(numeroFeriados) {
    /*
    A função retornaProximosFeriados recebe como parâmetro o número de feriados a serem retornados.
    */

    /*
    O parâmetro recebido é passado para a função filtraFeriados, que recebe também um array com todos os feriados da camada de dados.
    Para conseguir filtrar os dados, a função filtraFeriados precisa receber o array de feriados e o número de feriados a ser retornado
    */
    let feriadosFiltro = filtraFeriados(feriadosNacionais, numeroFeriados);
    let feriadosFiltroFormatados = [];

    /*
    O array filtrado é 'percorrido' e retorna o dia da semana do feriado e a data formatada como dd/mm/aa.
    */    
    feriadosFiltro.forEach(feriado => {
        const dataFeriado = feriado.data;
        let diaSemana = formataDiaSemana(dataFeriado);
        const dataFeriadoFormatada = formataDataFeriado(dataFeriado);
        
        /*
        O resultado é adicionado no array -feriadosFiltroFormatados[]-, de forma que os seus itens possuam um nome, o dia da semana e a data formatada do feriado.
        */
        feriadosFiltroFormatados.push({
            nome: feriado.nome,
            diaSemana: diaSemana,
            data: dataFeriadoFormatada
        });
    });

    /*
    A camada de serviço não sabe como a filtragem ocorre ou como a formatação é feita. Ela apenas se preocupa em retornar os próximos feriados.
    Por fim, a função retorna o array -feriadosFiltroFormatados[]-.
    */
    return feriadosFiltroFormatados;
}

export default retornaProximosFeriados;