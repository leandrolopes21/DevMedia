/*
function processaNumeros(...numeros) {
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > 10) {
            soma += numeros[i];
        }
    }
    return { soma: soma, resultado: soma > 50 ? 'Alta' : 'Baixa' };
}

const dados = processaNumeros(5, 15, 20, 8);

const valorSoma = dados.soma;
const retornoFuncao = dados.resultado;

console.log(valorSoma);
console.log(retornoFuncao);
*/

function classificaValor(valor) {
    if (valor > 0) {
        return 'Positivo';
    } else if (valor < 0) {
        return 'Negativo';
    }

    return 'Zero';
}

console.log(classificaValor());