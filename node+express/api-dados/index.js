const express = require('express');
const app = express();

const servico = require('./servico');

app.get('/', (req, res) => {

    let ano = req.query.ano;

    if (servico.validaParametro(req.query.ano)) {

        let informaFato = servico.retornaMensagemAno(ano);

        res.json({'ano': ano, 'fato': informaFato});
    } else {

        res.status(400).json({'Erro': 'Parâmetro inválido!'});
    }
});

app.listen(8080, () => {
    let data = new Date();
    console.log('Servidor iniciado na porta 8080 em ' + data.toLocaleDateString() + ' ' + data.toLocaleTimeString());
});