const jogos = [
    {nome: 'God of War Ragnarök',                    plataforma: 'PS5', anoLancamento: 2022},
    {nome: 'Marvels Spider-Man: Miles Morales',      plataforma: 'PS5', anoLancamento: 2020},
    {nome: 'Horizon Forbidden West',                 plataforma: 'PS5', anoLancamento: 2022},
    {nome: 'Ratchet & Clank: Em Uma Outra Dimensão', plataforma: 'PS5', anoLancamento: 2021},
    {nome: 'Elden Ring',                             plataforma: 'PS5/Xbox', anoLancamento: 2022},
    {nome: 'Forza Horizon 5',                        plataforma: 'Xbox', anoLancamento: 2021},
    {nome: 'Starfield',                              plataforma: 'Xbox', anoLancamento: 2023},
    {nome: 'Halo Infinite',                          plataforma: 'Xbox', anoLancamento: 2021},
    {nome: 'Minecraft',                              plataforma: 'PS5/Xbox', anoLancamento: 2009},
    {nome: 'Cyberpunk 2077',                         plataforma: 'PS5/Xbox', anoLancamento: 2020},
];

// Filtra jogos que são exclusivos do PS5 ou que incluem PS5 na plataforma.
const jogosPS5 = jogos.filter(jogo => jogo.plataforma.includes('PS5'));

// Filtra jogos que são exclusivos do Xbox ou que incluem Xbox na plataforma.
const jogosXbox = jogos.filter(jogo => jogo.plataforma.includes('Xbox'));

/**
 * Imprime uma lista de jogos no console com um título.
 * @param {string} tituloDaLista - O título a ser exibido antes da lista de jogos.
 * @param {Array<object>} listaDeJogos - O array de jogos a ser impresso.
 */
const imprimirListaDeJogos = (tituloDaLista, listaDeJogos) => {
    console.log(`\n--- ${tituloDaLista} ---`);
    if (listaDeJogos.length === 0) {
        console.log("Nenhum jogo encontrado.");
        return;
    }
    listaDeJogos.forEach(jogo => {
        console.log(`- ${jogo.nome} (${jogo.plataforma})`);
    });
};

// Imprime as listas de jogos de cada plataforma.
imprimirListaDeJogos("Jogos de PS5", jogosPS5);
imprimirListaDeJogos("Jogos de Xbox", jogosXbox);