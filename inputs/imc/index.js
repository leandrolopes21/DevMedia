import entradaDados from 'readline-sync';
import {calcularIMC, classificacaoIMC} from './funcao/calculadoraIMC.js';
import { validaPeso, validaAltura } from './funcao/validaPesoAltura.js';

let peso = entradaDados.question('\nDigite seu peso: ');
let altura = entradaDados.question('Digite sua altura: ');

let verificaPesoValido = validaPeso(peso);
let verificaAlturaValida = validaAltura(altura);

if (verificaPesoValido && verificaAlturaValida) {

    let resultadoIMC = calcularIMC(peso, altura);
    let statusIMC = classificacaoIMC(resultadoIMC);

    console.log(`\nSeu IMC é ${resultadoIMC}`);
    console.log(`${statusIMC}\n`);

} else {

    console.log(`\nOs valores de peso e altura devem ser maiores que zero!\n`);
}

