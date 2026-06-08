// Após conectar, remover a importação da conexão, deixei apenas comentado
import pool from './servico/conexao.js';
import express from 'express';
import { retornaCampeonatos, retornaCampeonatosAno, retornaCampeonatosID, retornaCampeonatosTime } from './servico/retornaCampeonatos_servico.js';

const app = express();

// API que retorna todos os registros da tabela campeonatos no banco de dados Libertadores
// Esta mesma API, tem rotas para retornar a busca a partir do ano e do time, utlizados como parâmetro
app.get('/campeonatos', async (req, res) => {

    let campeonatos;
    const ano = req.query.ano;
    const time = req.query.time;

    if (typeof ano === 'undefined' && typeof time === 'undefined') {
        campeonatos = await retornaCampeonatos();
    } else if (typeof ano !== 'undefined') {
        campeonatos = await retornaCampeonatosAno(parseInt(ano));
    } else if (typeof time !== 'undefined') {
        campeonatos = await retornaCampeonatosTime(time);
    }

    if (campeonatos.length > 0) {
        res.json(campeonatos);
    } else {
        res.status(404).json({mensagem: "Nenhum campeonato encontrado!"});
    }
});

// API que retorna os registros da tabela campeonatos no banco de dados Libertadores, a partir do seu id
app.get('/campeonatos/:id', async (req, res) => {
    const id = parseInt(req.params.id);

    const campeonato = await retornaCampeonatosID(id);
    
    if (campeonato.length > 0) {
        res.json(campeonato);
    } else {
        res.status(404).json({mensagem: "Nenhum campeonato encontrado!"});
    }
});

app.listen(9000, async () => {
    const data = new Date();
    console.log(`Servidor iniciado em ${data.toLocaleDateString()} ${data.toLocaleTimeString()}`);

    // createpool busca uma conexão existente.
    // se não houver conexão, cria uma nova.
    // Após conectar, remover a conexão, deixei apenas comentado.
    // O await só é utilizado antes de funções assíncronas, e o getConnection é uma função assíncrona.
    // Isso garante que o Id da conexão, só será impresso após a conexão estabelecida
    const conexao = await pool.getConnection();

    // threadId imprime no console um número que identifica a conexão.
    // Mas só executa, após o retorno do await
    // Após conectar, remover a conexão, deixei apenas comentado.
    console.log(conexao.threadId);

    // conexão volta ao pool de conexões, ficando disponível para ser reutilizada.
    // Após conectar, remover a conexão, deixei apenas comentado.
    conexao.release();
});