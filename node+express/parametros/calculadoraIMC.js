// Camada de serviço
// Camada responsável pelo cálculo do imc
// A função calculaIMC, recebe os parâmetros peso e altura, e efetua o cálculo do imc

function calculaIMC(peso, altura) {
    let imc = peso / (altura * altura);
    return imc;
};

function retornaStatusIMC(imc) {
    
    let status;

    if (imc < 18.5) {
        status = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        status = 'Peso normal';
    } else if (imc >= 24.9 && imc < 30) {
        status = 'Acima do peso';
    } else {
        status = 'Obeso';
    }

    return status;
}

// Exportando a função
exports.calculaIMC = calculaIMC;
exports.retornaStatusIMC = retornaStatusIMC;