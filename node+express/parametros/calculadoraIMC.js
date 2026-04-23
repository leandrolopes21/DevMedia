// Camada de serviço
// Camada responsável pelo cálculo do imc
// A função calculaIMC, recebe os parâmetros peso e altura, e efetua o cálculo do imc

function calculaIMC(peso, altura) {
    let imc = peso / (altura * altura);
    return imc;
};

// A função statusIMC, recebe o valor do imc já calculado pela função calculaIMC, e verifica a condição do status conforme o imc recebido

function statusIMC(imc) {
     let status;

     if (imc < 18.5) {
        status = 'Abaixo do peso';
     } else if (imc < 24.9) {
        status = 'Peso normal';
     } else if (imc < 29.9) {
        status = 'Sobrepeso';
     } else if (imc < 34.9) {
        status = 'Obesidade grau I';
     } else if (imc < 39.9) {
        status = 'Obesidade grau II';
     } else {
        status = 'Obesidade grau III (mórbida)';
     }

     return status;
};

// A função validaParametro, verifica se os valores de peso e altura fornecidos, são ou não numéricos

function validaParametro(parametro) {
    return !isNaN(parametro) && parametro !== null && parametro !== "";
}

// Exportando a função
exports.calculaIMC = calculaIMC;
exports.statusIMC = statusIMC;
exports.validaParametro = validaParametro;
