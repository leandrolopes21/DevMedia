function calcularIMC(peso, altura) {

    let imc = peso / (altura * altura);

    return imc.toFixed(2);
}

let peso = 75;
let altura = 1.71;

console.log(calcularIMC(peso, altura));