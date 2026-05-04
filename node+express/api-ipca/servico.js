import historicoInflacao from "./dados.js";

export const exibeDadosIpca = () => {
    return historicoInflacao;
};

export const exibeDadosPorID = (id) => {
    const dadosId = parseInt(id);
    return historicoInflacao.find(dado => dado.id === dadosId);
};

export const exibeDadosIpcaPorAno = (ano) => {
    const dadosAno = parseInt(ano);
    return historicoInflacao.filter(dado => dado.ano === dadosAno);
};

/*
export const buscarProdutoPorNome = (nomeProduto) => {
    return produtos.filter(produto => produto.nome.toLowerCase().includes(nomeProduto.toLowerCase()));
};

export const buscarProdutoCategoria = (nomeCategoria) => {
    return produtos.filter(produto => produto.categoria.toLowerCase().includes(nomeCategoria.toLowerCase()));
};
*/
