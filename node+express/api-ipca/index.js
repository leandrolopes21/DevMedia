import { exibeDadosIpca, exibeDadosIpcaPorAno, exibeDadosPorID } from './servico.js';
import express from 'express';
const app = express();

app.get('/inflacao', (req, res) => {
    const dadosIpca = req.query.dados;
    const dadosIpcaAno = req.query.busca;

    const retornaDados = dadosIpcaAno ? exibeDadosIpcaPorAno(dadosIpcaAno) : exibeDadosIpca();
    res.json(retornaDados);
});

app.get('/inflacao/:id', (req, res) => {
    const dadosIpcaID = req.params.id;
    const retornaDadosIpcaID = exibeDadosPorID(dadosIpcaID);
    res.json(retornaDadosIpcaID);
});

app.listen(8080, () => {
    let data = new Date();
    console.log(`Servidor iniciado em ${data.toLocaleDateString()} ${data.toLocaleTimeString()}`);
});