import pool from './servico/conexao.js';
import express from 'express';
import { retornaMedicos } from './servico/retornaMedicos.js';

const app = express();

app.get('/medicos', async (req, res) => {

    const medicos = await retornaMedicos();

    if (medicos.length > 0) {
        res.json(medicos);
    } else {
        res.status(404).json({ mensagem: "Nenhum médico encontrado!"});
    }
});

app.listen(8000, async () => {
    const data = new Date();
    console.log(`Servidor iniciado em ${data.toLocaleDateString()} ${data.toLocaleTimeString()}`);

    const conexao = await pool.getConnection();
    console.log(conexao.threadId);
    conexao.release();
});