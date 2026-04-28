const express = require('express');
const app = express();

const curiosidades = [
   {id: 1, titulo: 'Curiosidade 1', descricao: 'A formiga é um dos animais mais fortes em relação ao seu tamanho.'},
   {id: 2, titulo: 'Curiosidade 2', descricao: 'O DNA humano, se esticado, alcançaria uma distância de cerca de 16 bilhões de quilômetros.'},
   {id: 3, titulo: 'Curiosidade 3', descricao: 'As baleias-azuis são os maiores animais que já existiram na Terra.'},
   {id: 4, titulo: 'Curiosidade 4', descricao: 'O Sol leva cerca de 8 minutos e 20 segundos para a luz percorrer a distância até chegar à Terra.'},
];

function retornaCuriosidade() {
    const numero = Math.floor(Math.random() * curiosidades.length);
    return curiosidades[numero];
}

app.get('/curiosidades/quiz', (req, res) => {
    res.json(retornaCuriosidade());
});

app.listen(8080, () => {
    console.log('Servidor iniciado na porta 8080');
});