// Importacoes
import pool from './conexao/conexao.js';

import express from 'express';
import cors from 'cors';

import { RetornaLeads } from './servico/servico_leads.js';
import { ValidaDadosAutenticacao } from './validacao/valida_autenticacao.js';
import { GeraToken, validaToken } from './servico/servico_autenticacao.js';
import { validaUsuario } from './validacao/valida.js';
import { cadastraLead } from './servico/cadastro_servico.js';

// Inicializa a aplicação Express
const app = express();

// Middleware para interpretar requisições com corpo em JSON
app.use(express.json());
// Middleware para servir arquivos estáticos do front-end (comentado)
// app.use(express.static('../front-end')); // Utilizado em conjunto com o front-end
app.use(cors());

// Rota POST para autenticacao de usuario
app.post('/login', (req, res) => {
    const usuario = req.body.usuario;
    const senha = req.body.senha;

    const autenticacaoValida = ValidaDadosAutenticacao(usuario, senha);

    if (!autenticacaoValida) {
        res.status(401).send({message: "Usuário não autorizado"});
        return;
    }

    const token = GeraToken();
    res.status(200).send({token: token});
});

// Rota GET para retornar todos os usuários (leads) cadastrados, a partir do login com usuário e senha
app.get('/lista-leads', async (req, res) => {
    // Recebe o token anviado na requisição e usa split para remover o texto 'Bearer'
    let token;

    if (typeof req.headers.authorization !== 'undefined') { // Todo token deve ser recebido por req.headers.authorization por padrão
        token = req.headers.authorization.split(' ')[1];
    } else {
        token = -1;
    }

    const tokenValido = validaToken(token);

    if (!tokenValido.status) {
        res.status(tokenValido.codigo).end();
        return;
    }

    const listaLeads = await RetornaLeads();

    res.status(tokenValido.codigo).send({listaLeads});
});

// Rota POST para criar um novo lead, ou seja, um novo usuario cadastrado
app.post('/usuarios', async (req, res) => {
    // Extrai o nome do corpo da requisição
    const nome = req.body.nome;
    // Extrai o email do corpo da requisição
    const email = req.body.email;
    // Extrai o telefone do corpo da requisição
    const telefone = req.body.telefone;

    const usuarioValido = validaUsuario(nome, email, telefone); // Chama a funcao de validacao de dados

    if (usuarioValido.status) {
        await cadastraLead(nome, email, telefone);
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