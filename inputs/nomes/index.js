let nomes = [
    {nome: 'Leandro', idade: 40},
    {nome: 'Lucas', idade: 12},
    {nome: 'Marize', idade: 41},
];

const verificaMaiorIdade = nomes.reduce((maior, atual) => {
    return atual.idade > maior.idade ? atual : maior;
});

console.log(`${verificaMaiorIdade.nome} - ${verificaMaiorIdade.idade}`);