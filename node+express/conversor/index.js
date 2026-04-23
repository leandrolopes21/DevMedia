const express = require('express');
const app = express();

const conversorTemperatura = require('./conversorTemperatura');

app.get('/', (req, res) => {

    let temperatura = req.query.temperatura;
    let conversor = req.query.conversor;

    let temperaturaGraus = conversorTemperatura.converteTemperatura(temperatura, conversor);

    res.json({temperatura: temperaturaGraus});
});

app.listen(8080, () => {
    let data = new Date();
    console.log('Servidor iniciado em: ' + data.toLocaleDateString() + ' ' + data.toLocaleTimeString());
});