// 1ª seção - responsável por preparar o express na nossa aplicação
const express = require('express');
const app = express();

// 2ª seção - utilizando a variável get contida na variável app, que pertence ao express
app.get('/', (req, res) => {
    let mensagem = {mensagem: 'Olá, meu mundo! Como estamos??'};
    res.json(mensagem);
});

// 3ª seção - utilizando a função listen do express, através da variável app
app.listen(8080, () => {
    let data = new Date();
    console.log('Servidor node iniciado em : ' + data.toLocaleDateString() + ' ' + data.toLocaleTimeString())
});