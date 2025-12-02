// array de objetos
let times = [
    {nome: 'Time Verde', pontos: 69},
    {nome: 'Time Vermelho', pontos: 34},
    {nome: 'Time Azul', pontos: 90},
    {nome: 'Time Amarelo', pontos: 52},
];

// arrow function para ordenar os times
times.sort((a, b) => {
    return b.pontos - a.pontos; // ordenação decrescente (b - a)
});

console.log('\n**************************************');

// loop for () para apresentar os times de forma ordenada
for (let i = 0; i < times.length; i++) {

    let posicao = i + 1;

    console.log(posicao + ' | ' + times[i].nome + ' - ' +  times[i]. pontos + ' pts');

}

console.log('\n**************************************');