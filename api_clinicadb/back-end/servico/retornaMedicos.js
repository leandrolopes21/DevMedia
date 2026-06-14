import pool from './conexao.js';

async function retornaConsulta(conexao, consulta) {

    const resultado_consulta = await conexao.query(consulta);
    const resposta = resultado_consulta[0]; // Armazena o resultado da consulta
    return resposta; // Retorna o resultado da consulta
}

// Função para retornar toda a tabela medicos
export async function retornaMedicos() {
    let conexao;
    try {
        conexao = await pool.getConnection();
        const consulta = 'SELECT * FROM medicos';
        const medicos = await retornaConsulta(conexao, consulta);
        return medicos;
    } finally {
        if (conexao) conexao.release();
    }
}