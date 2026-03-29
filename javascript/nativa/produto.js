// Array de objetos que representa uma lista de produtos cadastrados.
// Cada objeto de produto possui as propriedades: id, nome, estoque e valor.
const produtosCadastrados = [
    { id: 1, nome: 'Açucar', estoque: 100, valor: 2.00 },
    { id: 2, nome: 'Alcool 70', estoque: 50, valor: 9.95 },
    { id: 3, nome: 'Luvas descartáveis', estoque: 1000, valor: 2.50 },
];

/*
 * Cria e retorna um novo objeto de produto contendo apenas as propriedades
 * necessárias para exibição (nome e valor).
 * @param {object} produto - O objeto de produto original.
 * @returns {{nome: string, valor: number}} Um novo objeto com as propriedades 'nome' e 'valor'.
 */
function retornaProduto(produto) {
    // Define a estrutura do objeto que será retornado.
    const produtoExibicao = {
        nome: produto.nome,
        valor: produto.valor
    }

    // Retorna o novo objeto formatado.
    return produtoExibicao;
}

// Utiliza a função 'map' para percorrer cada item do array 'produtosCadastrados'.
// Para cada produto, a função 'retornaProduto' é chamada, e o resultado
// é adicionado a um novo array chamado 'produtosExibicao'.
const produtosExibicao = produtosCadastrados.map(retornaProduto);

// Imprime o novo array 'produtosExibicao' no console.
console.log(produtosExibicao);