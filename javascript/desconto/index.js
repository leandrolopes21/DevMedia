// Lista de produtos disponíveis com seus respectivos status de promoção e preços
const produtos = [
  { id: 1, nome: 'Smartphone', promocao: true, preco: 1000 },
  { id: 2, nome: 'Tablet', promocao: false, preco: 600 },
  { id: 3, nome: 'Notebook', promocao: true, preco: 1500 },
  { id: 4, nome: 'Fone de Ouvido', promocao: true, preco: 80 },
];

/**
 * Filtra produtos em promoção e aplica um desconto percentual.
 * @param {Array} produtos - Array de objetos de produtos.
 * @returns {Array} Um novo array contendo apenas produtos em promoção com preços atualizados.
 */
function aplicarDesconto(produtos) {
    // Define o fator de desconto (0.8 representa 20% de desconto)
    const descontoPromocional = 0.8;

    // Primeiro filtramos apenas os itens em promoção e depois mapeamos para aplicar o novo preço
    return produtos.filter(produto => produto.promocao).map(produto => {
        return {
            id: produto.id,
            nome: produto.nome,
            promocao: produto.promocao,
            preco: produto.preco * descontoPromocional
        };
    });
}

// Exibe no console o resultado da aplicação do desconto
console.log(aplicarDesconto(produtos));