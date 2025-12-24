import entradaDados from 'readline-sync';

// const calcularExpoente = (base, expoente) => { // Utilizando arrow function

//     let power = Math.pow(base, expoente);
//     return power;
// };

function calcularExpoente(base, expoente) { // Utilizando função tradicional

    let power = Math.pow(base, expoente);
    return power;

}

let base = entradaDados.question('Digite o valor da base: ');
let expoente = entradaDados.question('Digite o valor do expoente: ');

let resultado = calcularExpoente(base, expoente);

console.log(`Resultado: ${resultado}`);