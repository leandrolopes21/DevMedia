// Camada de serviço
// Camada responsável pelo cálculo do imc
// A função calculaIMC, recebe os parâmetros peso e altura, e efetua o cálculo do imc

function calculaIMC(peso, altura) {
    let imc = peso / (altura * altura);
    return imc;
};

// Exportando a função
exports.calculaIMC = calculaIMC;