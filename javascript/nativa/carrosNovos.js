// Array de objetos que representa uma lista de carros.
// Cada objeto de carro possui as propriedades: marca, modelo, anoFabricacao e novo (booleano).
const carros = [
    { marca: 'Fiat', modelo: 'Uno', anoFabricacao: 2015, novo: false },
    { marca: 'GM', modelo: 'Onix', anoFabricacao: 2018, novo: false },
    { marca: 'Ford', modelo: 'KA+', anoFabricacao: 2018, novo: false },
    { marca: 'Fiat', modelo: 'Cronos', anoFabricacao: 2020, novo: true },
];
/*
 * Função de callback que verifica se um carro é novo.
 * @param {object} carro - O objeto de carro a ser verificado.
 * @returns {boolean} Retorna true se a propriedade 'novo' do carro for verdadeira.
 */
function retornaCarroNovo(carro) {

    return carro.novo == true;
}

/*
 * Função de callback que verifica se um carro é usado.
 * @param {object} carro - O objeto de carro a ser verificado.
 * @returns {boolean} Retorna true se a propriedade 'novo' do carro for falsa.
 */
function retornaCarroUsado(carro) {

    return carro.novo == false;
}

// Utiliza o método 'filter' com a função 'retornaCarroNovo' para criar
// um novo array contendo apenas os carros marcados como novos.
const carrosNovos = carros.filter(retornaCarroNovo);

// Utiliza o método 'filter' com a função 'retornaCarroUsado' para criar
// um novo array contendo apenas os carros marcados como usados (seminovos).
const carrosSeminovos = carros.filter(retornaCarroUsado);

// Imprime a lista de carros novos no console.
console.log(carrosNovos);
// Imprime a lista de carros seminovos no console.
console.log(carrosSeminovos);