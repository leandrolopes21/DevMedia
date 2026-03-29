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

function listaJogos(jogo) {
    console.log(`Nome do jogo: ${jogo.nome} - Ano de lançamento: ${jogo.anoLancamento} - Plataforma: ${jogo.plataforma}`);
}

function retornaFiltroPlataforma(jogo) {
    return jogo.plataforma == 'Xbox';
}

const jogosPlataforma = jogos.filter(retornaFiltroPlataforma);

jogosPlataforma.forEach(listaJogos);