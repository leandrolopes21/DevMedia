import { exibeDadosIpca, exibeDadosIpcaPorAno, exibeDadosPorID } from './servico.js';
import express from 'express';
const app = express();

// 1ª Rota, mostra todos os dados entre 01/2015 e 12/2023, ou filtra por ano específico
app.get('/inflacao', (req, res) => {
    const dadosIpca = req.query.dados;
    const dadosIpcaAno = req.query.busca;
    const retornaDados = dadosIpcaAno ? exibeDadosIpcaPorAno(dadosIpcaAno) : exibeDadosIpca();
    res.json(retornaDados);
});

// 2ª Rota, busca os dados através do seu id
app.get('/inflacao/:id', (req, res) => {
    const dadosIpcaID = req.params.id;
    const retornaDadosIpcaID = exibeDadosPorID(dadosIpcaID);
    res.json(retornaDadosIpcaID);
});

app.listen(8080, () => {
    let data = new Date();
    console.log(`Servidor iniciado em ${data.toLocaleDateString()} ${data.toLocaleTimeString()}`);
});