// 1ª seção - responsável por preparar o express na nossa aplicação
const express = require('express');
const app = express();

let celular = '(21)99719-9463';
let valido = celular.length === 14 ? true : false;

// 2ª seção - utilizando a variável get contida na variável app, que pertence ao express
app.get('/', (req, res) => {
    res.json({telefone: valido});
});

// 3ª seção - utilizando a função listen do express, através da variável app
app.listen(8080, () => {
    console.log('Servidor iniciado');
})