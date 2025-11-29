// Array de objetos que representa uma lista de carros.
// Cada objeto de carro possui as propriedades: marca, modelo e anoFabricacao.
const carros = [
    { marca: 'Fiat', modelo: 'Uno', anoFabricacao: 2015 },
    { marca: 'GM', modelo: 'Onix', anoFabricacao: 2018 },
    { marca: 'Ford', modelo: 'KA+', anoFabricacao: 2018 },
    { marca: 'Fiat', modelo: 'Cronos', anoFabricacao: 2020 },
    { marca: 'VW', modelo: 'Taos', anoFabricacao: 2025 },
    { marca: 'Nissan', modelo: 'Versa', anoFabricacao: 2024 },
];

/*
 * Função de callback para o método filter. Verifica se a marca de um carro
 * é igual a 'Fiat'.
 * @param {object} carro - O objeto de carro a ser verificado.
 * @returns {boolean} Retorna true se a marca do carro for 'Fiat', caso contrário, false.
 */
function retornaMarcaCarro(carro) {
    return carro.marca == 'Fiat';
}

// Utiliza o método 'filter' para criar um novo array 'marcaCarros'.
// O novo array conterá apenas os elementos do array 'carros' para os quais
// a função 'retornaMarcaCarro' retornar true.
const marcaCarros = carros.filter(retornaMarcaCarro);

// Imprime o array com os carros da marca Fiat no console.
console.log(marcaCarros);