import entradaDados from 'readline-sync';
import {converterTemperaturaFahrenheit, statusTemperatura} from './funcoes/funcoes.js';

let temperaturaCelsius = entradaDados.question('\nDigite a temperatura agora em Celsius: ');

let fahrenheit = converterTemperaturaFahrenheit(temperaturaCelsius);
let tempo = statusTemperatura(temperaturaCelsius);

console.log(`\nTemperatura em Fahrenheit: ${fahrenheit.toFixed(0)}°F`);
console.log(`\nO clima hoje está ${tempo.toLocaleLowerCase()}`);