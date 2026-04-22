let carro = {nome: "Argo", marca: "Fiat", preco: 50000, ano: 2020};

let percentual_desconto = 0.05; // 5%

for (let propriedade in carro) {

    if (propriedade == "preco") {

        let preco = propriedade;
        let desconto = (carro[preco] * percentual_desconto);
        let novo_preco = carro[preco] - desconto;

        console.log("Novo preço: R$" + novo_preco + ",00");
    } else {
        
        console.log(propriedade + ": " + carro[propriedade]);
    }
}