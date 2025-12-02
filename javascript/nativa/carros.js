// Array de objetos que representa uma lista de carros.
// Cada objeto de carro possui as propriedades: marca, modelo e anoFabricacao.
const carros = [
    { marca: 'Fiat', modelo: 'Uno', anoFabricacao: 2015 },
    { marca: 'GM', modelo: 'Onix', anoFabricacao: 2018 },
    { marca: 'Ford', modelo: 'KA+', anoFabricacao: 2018 },
    { marca: 'Fiat', modelo: 'Cronos', anoFabricacao: 2020 },
];
/*
 * Formata as informações de um objeto de carro em uma única string.
 * @param {object} carro - O objeto de carro com as propriedades marca, modelo e anoFabricacao.
 * @returns {string} Uma string formatada com os detalhes do carro.
 
function retornaCarro(carro) {
    return carro.marca + ' ' + carro.modelo + ' ano: ' + carro.anoFabricacao;
}

// Utiliza a função 'map' para percorrer cada carro no array 'carros'.
// A função 'retornaCarro' é aplicada a cada objeto, criando um novo array
// de strings chamado 'novosCarros'.
const novosCarros = carros.map(retornaCarro);

// Imprime o array 'novosCarros' no console.
console.log(novosCarros);
*/


// Exemplo de filter utilizando arrow function
const carrosFiat = carros.filter((carro) => carro.marca == 'Fiat');

console.log(carrosFiat);