// Este tipo de importação com import, usa o tipo module

import express from 'express';
import { colecaoUfs } from './dados/dados.js';

const app = express();

const buscarUfPorNome = (nomeUf) => {
    return colecaoUfs.filter(uf => uf.nome.toLowerCase().includes(nomeUf.toLowerCase()));
};

// Rota para obter todos os itens da coleção
app.get('/ufs', (req, res) => {

    const nomeUf = req.query.busca;
    const resultado = nomeUf ? buscarUfPorNome(nomeUf) : colecaoUfs;

    if (resultado.length > 0) {
        res.json(resultado);
    } else {
        res.status(404).send({"erro": "Nenhuma UF encontrada!"});
    }
});

// Rota para obter um item individual
// Se digitado https://localhost:8080/ufs/21 -->
app.get('/ufs/:iduf', (req, res) => {

    // Esta constante idUF irá receber o valor 21
    const idUF = parseInt(req.params.iduf);
    
    // Esta constante uf irá buscar o valor recebido em idUF
    const uf = colecaoUfs.find(u => u.id === idUF);

    if (isNaN(idUF)) {
        
        res.status(400).send({"Erro": "Requisição inválida!"});

    } else if (idUF > 27) {

        res.status(404).send({"Mensagem": "Unidade Federal não encontrada."});

    } else {

        // Será apresentado para o cliente, em json, o valor recebido e encontrado na coleção (21)
        res.json(uf);
    }    
});

app.listen(8080, () => {
    let data = new Date();
    console.log('Servidor iniciado em ' + data.toLocaleDateString() + ' ' + data.toLocaleTimeString());
});