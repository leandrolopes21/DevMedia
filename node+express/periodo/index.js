const express = require('express');
const app = express();

let data = new Date();
let hora = data.getHours();
let minuto = data.getMinutes();
let horario = `${hora}:${minuto}`;

let mensagem;
if (hora >= 0 && hora < 12) {
    mensagem = {horario: horario, texto: 'Tenha um bom dia!'};
} else if (hora >= 12 && hora < 18) {
    mensagem = {horario: horario, texto: 'Tenha uma boa tarde!'};
} else {
    mensagem = {horario: horario, texto: 'Tenha uma boa noite!'};
}

app.get('/', (req, res) => {
    res.json(mensagem);
});

app.listen(8080, () => {
    console.log('Servidor iniciado');
});