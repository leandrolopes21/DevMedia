import pool from "./conexao.js";

// Esta função recebe dois parâmetros
// conexao, que o objeto que armazena a conexão com o banco de dados
// query, que é a string contendo a query que será executada, ex: -- SELECT * FROM campeonatos --
async function retornaQuery(conexao, query) {

    const resultado_query = await conexao.query(query);

    const resposta = resultado_query[0]; // Armazena o resultado da query
    return resposta; // Retorna o resultado da query
}

// Função para retornar toda a tabelas campeonatos
export async function retornaCampeonatos() {
    const conexao = await pool.getConnection();

    const query = 'SELECT * FROM campeonatos';
    const campeonatos = retornaQuery(conexao, query);

    // const campeonatos_db = await conexao.query('SELECT * FROM campeonatos');
    // const campeonatos = campeonatos_db[0];

    conexao.release();

    return campeonatos;
}

// Função para retornar um registro através do id
export async function retornaCampeonatosID(id) {
    const conexao = await pool.getConnection();

    const query = ('SELECT id, campeao, vice, ano FROM campeonatos WHERE id = ' + id);
    const campeonatos = retornaQuery(conexao, query);

    // const campeonatos_db = await conexao.query('SELECT id, campeao, vice, ano FROM campeonatos WHERE id = ' + id);
    // const campeonatos = campeonatos_db[0];

    conexao.release();

    return campeonatos;
}

// Função para retornar um registro através do ano
export async function retornaCampeonatosAno(ano) {
    const conexao = await pool.getConnection();

    const query = ('SELECT id, campeao, vice, ano FROM campeonatos WHERE ano = ' + ano);
    const campeonatos = retornaQuery(conexao, query);

    // const campeonatos_db = await conexao.query('SELECT id, campeao, vice, ano FROM campeonatos WHERE ano = ' + ano);
    // const campeonatos = campeonatos_db[0];

    conexao.release();

    return campeonatos;
}

// Função para retornar um registro através do nome do time
export async function retornaCampeonatosTime(time) {
    const conexao = await pool.getConnection();

    const query = ('SELECT id, campeao, vice, ano FROM campeonatos WHERE campeao = "' + time +'"');
    const campeonatos = retornaQuery(conexao, query);

    // const campeonatos_db = await conexao.query('SELECT id, campeao, vice, ano FROM campeonatos WHERE campeao = "' + time +'"');
    // const campeonatos = campeonatos_db[0];

    conexao.release();

    return campeonatos;
}