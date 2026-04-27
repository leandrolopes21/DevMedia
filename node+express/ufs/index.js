/**
 * CAMADA DE ENTRADA E ROTEAMENTO (Controller/API)
 * 
 * Este arquivo é o ponto de partida da aplicação (Entry Point).
 * Ele utiliza o framework Express para configurar o servidor HTTP e gerenciar as rotas.
 */

// Importação do framework Express. 
// O uso da palavra-chave 'import' (ESM) exige que o "type": "module" esteja configurado no package.json.
import express from 'express';

// Importação das funções da camada de serviço.
// A separação entre index.js (rotas) e servico.js (lógica de negócio) segue o princípio de responsabilidade única.
import { buscarUfs, buscarUfPorId, buscarUfPorNome } from './servico/servico.js';

// Inicialização do servidor Express.
const app = express();

/**
 * ROTA: Listagem e Busca de UFs
 * Verbo HTTP: GET
 * Endpoint: /ufs
 * Descrição: Retorna a coleção completa de UFs ou filtra por nome se o parâmetro 'busca' for enviado.
 * Exemplo de busca: http://localhost:8080/ufs?busca=Rio
 */
app.get('/ufs', (req, res) => {
    // Captura o parâmetro de query string chamado 'busca'.
    const nomeUf = req.query.busca;
    
    // Operação ternária: Se houver um termo de busca, chama a função de filtragem; 
    // caso contrário, chama a função que retorna todos os registros.
    const resultado = nomeUf ? buscarUfPorNome(nomeUf) : buscarUfs();

    // Verifica se o array retornado possui dados para evitar respostas vazias sem contexto.
    if (resultado.length > 0) {
        res.json(resultado); // Retorna os dados encontrados com status 200 (OK).
    } else {
        // Retorna status 404 (Not Found) caso nenhum registro coincida com a busca.
        res.status(404).send({"erro": "Nenhuma UF encontrada!"});
    }
});

/**
 * ROTA: Consulta de UF por ID
 * Verbo HTTP: GET
 * Endpoint: /ufs/:iduf
 * Descrição: Retorna um objeto único representando uma UF específica.
 * Exemplo: http://localhost:8080/ufs/21
 */
app.get('/ufs/:iduf', (req, res) => {
    // Chama o serviço passando o parâmetro dinâmico da URL (:iduf).
    const uf = buscarUfPorId(req.params.iduf);

    // Estrutura de decisão para validação da resposta:
    if (uf) {
        res.json(uf); // Sucesso: Retorna o objeto da UF encontrada.
    } else if (isNaN(parseInt(req.params.iduf))) {
        // Validação de entrada: Se o ID não for um número, retorna erro 400 (Bad Request).
        res.status(400).send({"erro": "Requisição inválido!"});
    } else {
        // Caso o ID seja numérico, mas não exista no banco de dados, retorna 404.
        res.status(404).send({"erro": "UF não encontrada!"});
    }
});

// Configura o servidor para escutar requisições na porta 8080.
app.listen(8080, () => {
    let data = new Date();
    // Log de feedback no console para confirmar que o servidor está operante.
    console.log('Servidor iniciado em ' + data.toLocaleDateString() + ' ' + data.toLocaleTimeString());
});