// Array de objetos que representa uma lista de produtos.
// Cada objeto de produto possui as propriedades: id, nome, ativo (booleano) e valor.
const produtos = [
    { id: 1, nome: 'Açucar', ativo: true, valor: 2.00 },
    { id: 2, nome: 'Alcool 70', ativo: false, valor: 9.95 },
    { id: 3, nome: 'Luvas descartáveis', ativo: false, valor: 2.50 },
    { id: 4, nome: 'Guardanapo', ativo: true, valor: 1.50},
];
/*
 * Função de callback para o método filter. Verifica se a propriedade 'ativo'
 * de um produto é verdadeira.
 * @param {object} produto - O objeto de produto a ser verificado.
 * @returns {boolean} Retorna true se o produto estiver ativo, caso contrário, false.
 */
function verificaProdutoAtivo(produto) {

    return produto.ativo == true;
}

// Utiliza o método 'filter' para criar um novo array 'produtosAtivos'.
// O novo array conterá apenas os elementos do array 'produtos' para os quais
// a função 'verificaProdutoAtivo' retornar true.
const produtosAtivos = produtos.filter(verificaProdutoAtivo);

// Imprime o array com os produtos ativos no console.
console.log(produtosAtivos);