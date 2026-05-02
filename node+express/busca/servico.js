import { produtos } from "./dados.js";

export const buscarProdutos = () => {
    return produtos;
};

export const buscarProdutoId = (id) => {
    const produtoId = parseInt(id);
    return produtos.find(produto => produto.id === produtoId);
};

export const buscarProdutoPorNome = (nomeProduto) => {
    return produtos.filter(produto => produto.nome.toLowerCase().includes(nomeProduto.toLowerCase()));
};

export const buscarProdutoCategoria = (nomeCategoria) => {
    return produtos.filter(produto => produto.categoria.toLowerCase().includes(nomeCategoria.toLowerCase()));
};