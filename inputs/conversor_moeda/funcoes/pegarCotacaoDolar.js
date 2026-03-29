// Função assíncrona que busca a cotação do dolar em tempo real

async function pegarCotacaoDolar() {

    try {

        const resposta = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL');
        const dados = await resposta.json();

        const valorDolar = dados.USDBRL.bid;

        console.log(`A cotação atual do dólar é: R$ ${parseFloat(valorDolar).toFixed(2)}`);
    } catch (erro) {

        console.log('Erro ao buscar a cotação:', erro);
    }    
}

export default pegarCotacaoDolar;