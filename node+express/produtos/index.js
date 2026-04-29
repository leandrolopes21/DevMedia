const produtos = [
  { id: 1, nome: 'Camiseta', estoque: 5, preco: 50 },
  { id: 2, nome: 'Calça', estoque: 2, preco: 100 },
  { id: 3, nome: 'Tênis', estoque: 10, preco: 200 },
  { id: 4, nome: 'Boné', estoque: 1, preco: 30 },
];

function aplicarQueimaDeEstoque(listaProdutos) {
  const estoqueParaQueima = 3;

  return listaProdutos.map(produto => {
    // Alterado para >= para representar uma queima de estoque real (itens em excesso)
    if (produto.estoque >= estoqueParaQueima) {
      return {
        ...produto, // Utiliza o spread para manter as propriedades originais
        preco: produto.preco * 0.9,
        descontoAplicado: true
      };
    } else {
      return { ...produto }; // Retorna uma cópia para manter a imutabilidade
    }
  });
}

const produtosComDesconto = aplicarQueimaDeEstoque(produtos);
console.log(produtosComDesconto);