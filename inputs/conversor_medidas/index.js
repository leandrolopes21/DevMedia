// Camada de serviço com função tradicional
/*
import entradaDados from 'readline-sync';

function converterMilimetroPolegada(mm) {

    let conversor = mm / 25.4;
    return conversor;
}
*/

// Camada de serviço com arrow function
import entradaDados from 'readline-sync';

const converter = (mm) => {

    let conversor = mm / 25.4;
    return conversor;
}

// Camada de exibição
let mm = entradaDados.question('Digite o valor em milímetro: ');
let resultado = converter(mm);

console.log(`${resultado.toFixed(3)} inch`);