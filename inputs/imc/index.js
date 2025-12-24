/*
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
*/


// Aplicação abaixo utiliza arrow function
import entradaDados from 'readline-sync';
import {validaPeso, validaAltura} from './funcao/validaPesoAltura.js';

let peso = entradaDados.question('\nDigite seu peso: ');
let altura = entradaDados.question('\nDigite sua altura: ');

let verificaPesoValido = validaPeso(peso);
let verificaAlturaValida = validaAltura(altura);

if (verificaPesoValido && verificaAlturaValida) {

    const calcularIMC = (peso, altura) => {

        let imc = peso / (altura * altura);
        return imc.toFixed(1);    
    
    };

    const classificacaoIMC = (imc) => {

        let classe;
        let grau;

        // Verifica a faixa do IMC para determinar a classe e o grau
        if (imc < 18.5) {
            classe = 'Magreza';
            grau = 0;
        } else if (imc >= 18.5 && imc <= 24.9) {
            classe = 'Normal';
            grau = 0;
        } else if (imc >= 25 && imc <= 29.9) {
            classe = 'Sobrepeso';
            grau = 1;
        } else if (imc >= 30 && imc <= 39.9) {
            classe = 'Obesidade';
            grau = 2;
        } else if (imc >= 40) {
            classe = 'Obesidade Grave';
            grau = 3;
        } else {
            classe = 'Indefinido';
            grau = 'Indefinido';
        }

        let respostaIMC = `Classificação: ${classe} -- Grau de obesidade: ${grau}`;

        return respostaIMC;
    };

    let resultadoIMC = calcularIMC(peso, altura);
    let statusIMC = classificacaoIMC(resultadoIMC);

    console.log(`\nSeu IMC é ${resultadoIMC}`);
    console.log(`${statusIMC}\n`);
    
} else {

    console.log(`\nOs valores de peso e altura devem ser maiores que zero!\n`);
}

