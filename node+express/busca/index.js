import { buscarProdutos, buscarProdutoId, buscarProdutoPorNome, buscarProdutoCategoria } from "./servico.js";
import express from 'express';

const app = express();

// Rota para mostrar todos os produtos
// http://localhost:8080/produtos ||
// Rota para mostrar produtos por busca de nome ou categoria
// http://localhost:8080/produtos?nome=nome
// http://localhost:8080/produtos?categoria=categoria

app.get('/produtos', (req, res) => {
    const nome = req.query.nome;
    const categoria = req.query.categoria;

    const resultado = nome ? buscarProdutoPorNome(nome) : categoria ? buscarProdutoCategoria(categoria) : buscarProdutos();

    if (resultado.length > 0) {
        res.json(resultado);
    } else {
        res.status(404).send({'Erro': 'Nenhum produto encontrado!'});
    }
});

// Rota para mostrar os produtos pelo id
// http://localhost:8080/produtos/inserir_número_do_id

app.get('/produtos/:id', (req, res) => {
    const parametroId = req.params.id;

    if (isNaN(parseInt(parametroId))) {
        res.status(400).send({'Erro': 'Requisição inválida!'});
    } else {
        const produto = buscarProdutoId(parametroId);

        if (produto) {
            res.json({produto: produto});
        } else {
            res.status(404).send({'Erro': 'Produto não encontrado!'});
        }
    }    
});    

app.listen(8080, () => {
    let data = new Date();
    console.log(`Servidor iniciado em ${data.toLocaleDateString()} ${data.toLocaleTimeString()}`);
});