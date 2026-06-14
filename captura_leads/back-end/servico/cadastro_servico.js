// Importação do pool de conexão com o banco de dados
import pool from './conexao.js';

// Função assíncrona que cadastra um novo lead no banco de dados
export async function cadastraLead(nome, email) {
    // Obtém uma conexão do pool de conexões
    const conexao = await pool.getConnection();

    // Executa a query SQL para inserir um novo lead com nome e email
    const resposta = await conexao.query('INSERT INTO leads (nome, email) VALUES ("'+nome+'","'+email+'")');
    // const resposta = await conexao.query('INSERT INTO leads (nome, email) VALUES (?, ?)', [nome, email]);
    // Escrito desta forma, tem uma camada a mais de segurança, contra SQL injection

    // Exibe o resultado da operação no console (para debug)
    console.log(resposta);

    // Libera a conexão de volta ao pool para ser reutilizada
    conexao.release();

    // Retorna a resposta da query
    return resposta;
}