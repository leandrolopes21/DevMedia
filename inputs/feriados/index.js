import retornaProximosFeriados from './camada-de-servicos/retornaFeriados.js';
import imprimeFeriados from './camada-de-exibicao/imprimeFeriados.js';

console.log('\nOs próximos feriados serão: \n');

let numeroFeriados = 3;
let proximosFeriados = retornaProximosFeriados(numeroFeriados);

imprimeFeriados(proximosFeriados);