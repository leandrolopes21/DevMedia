// Importacoes
import express from 'express';
import pool from './servico/conexao.js';
import { cadastraLead } from './servico/cadastro_servico.js';
import { retornaregistros } from './servico/retorna_cadastrados.js';
import { validaUsuario } from './validacao/valida.js';

// Inicializa a aplicação Express
const app = express();

// Middleware para interpretar requisições com corpo em JSON
app.use(express.json());
// Middleware para servir arquivos estáticos do front-end (comentado)
// app.use(express.static('../front-end')); // Utilizado em conjunto com o front-end

// Rota GET para retornar todos os usuários (leads) cadastrados
app.get('/usuarios', async (req, res) => {
    // Chama a função que busca todos os registros do banco de dados
    const registros = await retornaregistros();

    // Verifica se há registros
    if (registros.length > 0) {
        // Se houver, retorna os registros em formato JSON
        res.json(registros);
    } else {
        // Se não houver, retorna erro 404 com mensagem
        res.status(404).json({ mensagem: "Nenhum registro encontrado!" });
    }
});

// Rota POST para criar um novo lead, ou seja, um novo usuario cadastrado
app.post('/usuarios', async (req, res) => {
    // Extrai o nome do corpo da requisição
    const nome = req.body.nome;
    // Extrai o email do corpo da requisição
    const email = req.body.email;

    const usuarioValido = validaUsuario(nome, email); // Chama a funcao de validacao de dados

    if (usuarioValido.status) {
        await cadastraLead(nome, email);
        res.status(204).end(); // Retorna status 204 (No Content) para indicar sucesso
    } else {
        res.status(400).send({ mensagem: usuarioValido.mensagem }); // Retorna status 400 indicando cadastro invalido
    }    
});

// Inicia o servidor na porta 3001
app.listen(3001, async () => {
    // Exibe mensagem de confirmação que o servidor foi iniciado
    console.log('Servidor iniciado na porta 3001');

    // Obtém uma conexão do pool para testar a conexão com o banco
    const conexao = await pool.getConnection();
    // Exibe o ID da thread da conexão no console
    console.log(conexao.threadId);
});