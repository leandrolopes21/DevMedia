// Camada REST da aplicação
// Primeira parte é a importação do express
// Em seguida a importação da camada de serviço, atribuída a constante calculadoraIMC

const express = require('express');
const app = express();

const calculadoraIMC = require('./calculadoraIMC');

// Aqui começa o método get, parte central da aplicação
// Aqui são definidas as variáveis peso e altura, atribuíndo a elas os valores recebidos do front-end
// Em seguida é chamada a função calculaIMC através da constante calculadoraIMC
// Os valores peso e altura são passados para a função
// Por fim, é enviado o valor do imc ao front-end atráves do arquivo json
app.get('/', (req, res) => {
    
    let peso = req.query.peso;
    let altura = req.query.altura;

    let imc = calculadoraIMC.calculaIMC(peso, altura);
    let formataResultado = imc.toFixed(2);
    let status = calculadoraIMC.retornaStatusIMC(imc);

    res.json({imc: formataResultado, status: status});
});

// Aqui o método listen, responsável por escutar todas as requisições HTTP feitas a API
app.listen(8080, () => {
    let data = new Date();
    console.log('Servidor node iniciado em: ' + data.toLocaleDateString() + ' ' + data.toLocaleTimeString());
});