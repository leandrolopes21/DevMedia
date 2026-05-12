const produtos = [
  { id: 1, nome: 'Smartphone', promocao: true, preco: 1000 },
  { id: 2, nome: 'Tablet', promocao: false, preco: 600 },
  { id: 3, nome: 'Notebook', promocao: true, preco: 1500 },
  { id: 4, nome: 'Fone de Ouvido', promocao: true, preco: 80 },
];

function aplicarDesconto(produtos) {
    const descontoPromocional = 0.8;

    return produtos.filter(produto => produto.promocao).map(produto => {
        if (produto.promocao) {
            return {
                id: produto.id,
                nome: produto.nome,
                promocao: produto.promocao,
                preco: produto.preco * descontoPromocional
            };
        } else {
            return produto;
        }
    });
}

console.log(aplicarDesconto(produtos));