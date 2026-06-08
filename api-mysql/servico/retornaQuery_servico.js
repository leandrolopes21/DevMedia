// Arquivo apenas como exemplo, para fins de estudo

import pool from './conexao.js';

// Esta função recebe dois parâmetros
// conexao, que o objeto que armazena a conexão com o banco de dados
// query, que é a string contendo a query que será executada, ex: -- SELECT * FROM campeonatos --
async function retornaQuery(conexao, query) {

    const resultado_query = await conexao.query(query);

    const resposta = resultado_query[0]; // Armazena o resultado da query
    return resposta; // Retorna o resultado da query
}