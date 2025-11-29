// Array de objetos que representa uma lista de produtos.
// Cada objeto de produto possui as propriedades: id, nome, estoque e valor.
const produtos = [
    { id: 1, nome: 'Açucar', estoque: 100, valor: 2.00 },
    { id: 2, nome: 'Alcool 70', estoque: 50, valor: 9.95 },
    { id: 3, nome: 'Luvas descartáveis', estoque: 1000, valor: 2.50 },
    { id: 4, nome: 'Shampoo', estoque: 200, valor: 5.00 },
    { id: 5, nome: 'Papel', estoque: 120, valor: 3.00 },
];

/*
 * Função redutora (callback para o método reduce) que calcula o valor total de um produto
 * (estoque * valor) e o acumula a um totalizador.
 * @param {number} total - O valor acumulado das iterações anteriores (o acumulador).
 * @param {object} produto - O objeto de produto atual sendo processado no array.
 * @returns {number} O novo valor acumulado.
 */
function retornaValorTotal(total, produto) {

    // Calcula o valor total para o produto atual (quantidade em estoque multiplicada pelo valor unitário).
    const valorTotal = produto.estoque * produto.valor;

    // Retorna a soma do total acumulado anteriormente com o valor total do produto atual.
    return total + valorTotal;
}

// Utiliza o método 'reduce' para iterar sobre o array 'produtos' e calcular o valor total a pagar.
// 'retornaValorTotal' é a função redutora que será chamada para cada produto.
// O segundo argumento, 0, é o valor inicial para o acumulador 'total'.
const valorAPagar = produtos.reduce(retornaValorTotal, 0);

// Imprime o valor total a pagar no console.
console.log(valorAPagar);