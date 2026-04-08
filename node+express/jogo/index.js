const express = require('express');
const app = express();

let jogos = ["Top Gear", "Star Wars", "Forza Horizon", "Super Mario"];
let jogo_escolhido = jogos[2];
// let jogo_json = {jogo: jogo_escolhido};

app.get('/', (req, res) => {
    let indice = Math.floor(Math.random() * jogos.length);
    res.json({jogo: jogos[indice]});
});

app.listen(8080, () => {
    console.log('Servidor iniciado...');
});