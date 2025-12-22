import entradaDadosCotacao from 'readline-sync';
import validarCompra from './validarCompra.js';

let cotacao = entradaDadosCotacao.question('Digite o valor da ação hoje: ');
let validar = validarCompra(cotacao);

console.log(`Nesse valor de ${cotacao} você ${validar}`);