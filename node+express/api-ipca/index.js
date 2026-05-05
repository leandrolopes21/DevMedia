import { exibeDadosIpca, exibeDadosIpcaPorAno, exibeDadosPorID } from './servico.js';
import express from 'express';
const app = express();

// 1ª Rota, mostra todos os dados entre 01/2015 e 12/2023, ou filtra por ano específico
app.get('/inflacao', (req, res) => {
    const dadosIpca = req.query.dados;
    const dadosIpcaAno = req.query.ano;
    // const retornaDados = dadosIpcaAno ? exibeDadosIpcaPorAno(dadosIpcaAno) : exibeDadosIpca();

    if (isNaN(dadosIpcaAno)) {
        res.status(400).json({"Erro": "Requisição inválida"});
    } else if (dadosIpcaAno < 2015 && dadosIpcaAno > 2023) {
        res.status(404).json({"Erro": "Parâmetro de busca não encontrado"});
    } else {
        if () {};
    }
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