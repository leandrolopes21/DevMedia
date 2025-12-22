import digitar from 'readline-sync';
import validarIdade from '../logica/funcao.js';

let validar = digitar.question('Digite sua idade: ');

console.log(validarIdade(validar));