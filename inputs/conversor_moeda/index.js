import entradaDados from 'readline-sync';
import {converteParaReal, converteParaEuro} from "./funcoes/converteMoedas.js";
import exibirMoeda from './funcoes/exibirMoeda.js';

let conversor = entradaDados.question('Digite a moeda que quer converter, euro ou real? ');

let dolar = '5.00';
let valorConvertido;

if (conversor == 'real') {

    valorConvertido = converteParaReal(dolar);
    valorConvertido = exibirMoeda(conversor, valorConvertido);
} else if (conversor == 'euro') {

    valorConvertido = converteParaEuro(dolar);
    valorConvertido = exibirMoeda(conversor, valorConvertido);
}

console.log(`Valor em dólar: ${exibirMoeda('dolar', dolar)}`);
console.log(`Valor convertido: ${valorConvertido}`);