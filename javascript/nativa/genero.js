// Array de objetos, onde cada objeto representa uma pessoa com as propriedades 'nome' e 'genero'.
const pessoas = [
    {nome: 'Leandro', genero: 'Masculino'},
    {nome: 'Marize', genero: 'Feminino'},
    {nome: 'Lucas', genero: 'Masculino'},
    {nome: 'Helena', genero: 'Feminino'},
    {nome: 'Carlos', genero:'Masculino'},
    {nome: 'Souza', genero: 'Masculino'}, // Há um espaço extra antes de 'Masculino' no código original, mas o filtro funciona.
    {nome: 'Silvio', genero: 'Masculino'},
    {nome: 'Alessandra', genero: 'Feminino'},
    {nome: 'Daniele', genero: 'Feminino'},
];

// Utiliza o método 'filter' para criar um novo array chamado 'homem'.
// Este novo array conterá apenas os objetos do array 'pessoas' onde a propriedade 'genero' é igual a 'Masculino'.
const homem = pessoas.filter((pessoa) => pessoa.genero == 'Masculino');

// Utiliza o método 'filter' para criar um novo array chamado 'mulher'.
// Este novo array conterá apenas os objetos do array 'pessoas' onde a propriedade 'genero' é igual a 'Feminino'.
const mulher = pessoas.filter((pessoa) => pessoa.genero == 'Feminino');

// Armazena o número total de elementos (pessoas) no array original 'pessoas'.
const total = pessoas.length;

/**
 * Função que imprime no console o objeto de pessoa recebido.
 * @param {object} pessoa - O objeto de pessoa a ser impresso.
 */
const imprimirGenero = function(pessoa) {
    console.log(pessoa);
}

// Imprime um cabeçalho para a lista de pessoas do gênero masculino.
console.log('\nGênero masculino:\n');
// Itera sobre o array 'homem' e chama a função 'imprimirGenero' para cada elemento, imprimindo-o no console.
homem.forEach(imprimirGenero);

console.log('\nGênero feminino:\n');
// Itera sobre o array 'mulher' e chama a função 'imprimirGenero' para cada elemento.
mulher.forEach(imprimirGenero);

// Imprime a contagem total de pessoas.
console.log('\nTotal: ' + total + ' pessoas!');

console.log('\n');