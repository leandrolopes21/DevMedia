// ********* ESTE ARQUIVO ESTÁ SEM USO NO MOMENTO *********

// Importação do pool de conexão com o banco de dados
import pool from './conexao.js';

// Função auxiliar assíncrona que executa uma query no banco de dados
async function retornaConsulta(conexao, query) {
    // Executa a query fornecida
    const resultado_query = await conexao.query(query);
    // Armazena o primeiro elemento do resultado (que contém os dados)
    const resposta = resultado_query[0];
    // Retorna o resultado da consulta
    return resposta;
}

// Função assíncrona que retorna todos os registros (leads) da tabela
export async function retornaregistros() {
    // Variável para armazenar a conexão
    let conexao;
    try {
        // Obtém uma conexão do pool de conexões
        conexao = await pool.getConnection();
        // Define a query SQL para selecionar todos os registros da tabela leads
        const query = 'SELECT * FROM leads';
        // Executa a query através da função auxiliar
        const registros = await retornaConsulta(conexao, query);
        // Retorna os registros encontrados
        return registros;
    } finally {
        // Garante que a conexão seja liberada de volta ao pool, mesmo em caso de erro
        if (conexao) conexao.release();
    }
}