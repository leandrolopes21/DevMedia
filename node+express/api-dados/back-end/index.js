// Importa o módulo Express, que é um framework web para Node.js.
const express = require('express');
// Importa o módulo CORS para permitir requisições de outras origens.
const cors = require('cors');
// Cria uma instância da aplicação Express.
const app = express();

app.use(cors());

// Importa o módulo de serviço que contém a lógica de negócios.
const servico = require('./servico');

// Define uma rota GET para o caminho raiz ('/').
// Esta rota espera um parâmetro de consulta 'ano'.
app.get('/', (req, res) => {

    // Extrai o parâmetro 'ano' da query string da requisição.
    let ano = req.query.ano;

    // Valida se o parâmetro 'ano' é um número usando a função do serviço.
    if (servico.validaParametro(req.query.ano)) {

        // Se o parâmetro for válido, busca o fato histórico correspondente.
        let informaFato = servico.retornaMensagemAno(ano);

        // Retorna uma resposta JSON com o ano e o fato histórico.
        res.json({'ano': ano, 'fato': informaFato});
    } else {

        // Se o parâmetro for inválido, retorna um status 400 (Bad Request)
        // e uma mensagem de erro em formato JSON.
        res.status(400).json({'Erro': 'Parâmetro inválido!'});
    }
});

// Inicia o servidor Express na porta 8080.
app.listen(8080, () => {
    // Obtém a data e hora atuais para o log.
    let data = new Date();
    // Exibe uma mensagem no console indicando que o servidor foi iniciado.
    console.log('Servidor iniciado na porta 8080 em ' + data.toLocaleDateString() + ' ' + data.toLocaleTimeString());
});