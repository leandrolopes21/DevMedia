import pool from "../conexao/conexao.js";

export async function RetornaLeads() {
    const conexao = await pool.getConnection();

    const resposta = await conexao.query("SELECT * FROM leads");
    conexao.release();

    const leads = resposta[0];

    return leads;
}