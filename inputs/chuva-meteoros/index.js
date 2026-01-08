import chuvaDeMeteoros from './data/chuva-de-meteoros.js';
import verificaChuvaVisivelHoje from './funcoes/hoje.js';
import verificaChuvaVisivelProximos2Meses from './funcoes/doisMeses.js';
import formataDados from './funcoes/formataDados.js';

const dataAtual = new Date();

const chuvasHoje = chuvaDeMeteoros.filter((chuva) => verificaChuvaVisivelHoje(chuva, dataAtual));

const chuvasProximas = chuvaDeMeteoros.filter((chuva) => verificaChuvaVisivelProximos2Meses(chuva, dataAtual));

const chuvaProximaFormatada = chuvasProximas.map((chuva) => formataDados(chuva));

console.log('CHUVA DE METEOROS');

if (chuvasHoje.length > 0) {
    console.log('CHUVAS QUE PODEM SER VISTAS HOJE');

    console.log(chuvasHoje);
} else {
    console.log('\nNão há chuvas hoje!\n');
}

console.log('CHUVAS QUE PODERÃO SER VISTAS NOS PRÓXIMOS 2 MESES');
console.log(chuvasProximas);
console.log(chuvaProximaFormatada); // Exibindo os dados formatados
