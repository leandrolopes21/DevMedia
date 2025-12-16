function soma() {
    
    return num1 + num2;    
}

function subtracao() {

    return num1 - num2;
}

function multiplicar() {

    return num1 * num2;
}

function dividir() {

    return num1 / num2;
}

function decidir() {

    if(num1 < num2) {
        
        console.log(`${num1} é menor que ${num2}`);
    } else {

        console.log(`${num1} é maior que ${num2}`);
    }
}

const num1 = 20;
const num2 = 5;

let resultadoSoma = soma(num1, num2);
let resultadoSubtracao = subtracao(num1, num2);
let resultadoMultiplicar = multiplicar(num1, num2);
let resultadoDividir = dividir(num1, num2);
let decisao = decidir(num1, num2);

// console.log(resultadoSoma);
// console.log(resultadoSubtracao);
// console.log(resultadoMultiplicar);
// console.log(resultadoDividir);

console.log(decisao);