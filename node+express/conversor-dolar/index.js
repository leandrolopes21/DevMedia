const express = require('express');
const app = express();

const converteParaReal = (dolar) => {
    const real = dolar * 4.90;
    return real;
};

app.get('/conversor', (req, res) => {
    const dolar = converteParaReal(Number(req.query.dolar));

    if (isNaN(dolar)) {
        res.status(400).json({error: 'Valor inválido para conversão.'});
    } else {
        const realConvertido = dolar;
        res.json({"Real": realConvertido});
    }
});

app.listen(8080, () => {
    console.log('Servidor iniciado na porta 8080');
});