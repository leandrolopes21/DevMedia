import series from './series.js'
import { retornaSerieDisney, retornaSerieHBO } from './retornaSeries.js'

let servico = 'Disney';
let retornaSeries = [];

switch (servico) {

    case 'Disney':
        retornaSeries = series.filter(retornaSerieDisney);
        break;
    case 'HBO':
        retornaSeries = series.filter(retornaSerieHBO);
        break;
}

retornaSeries.forEach(serie => {

    console.log(serie.nome);
    
});