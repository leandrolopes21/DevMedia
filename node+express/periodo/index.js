const express = require('express');
const app = express();

let mensagem = ({mensagem: 'Bom dia'});

app.get('/', (req, res) => {
    res.json(mensagem);
});

app.listen(8080, () => {
    console.log('Servidor iniciado');
});