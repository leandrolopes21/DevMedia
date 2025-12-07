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

const filtroPS5 = jogos.filter(jogo => jogo.plataforma.includes('PS5'));
const filtroXbox = jogos.filter(jogo => jogo.plataforma.includes('Xbox'));

const imprimirJogo = (titulo, lista) => {
    console.log(`\n*** ${titulo} ***\n`);

    lista.forEach(jogo => {
        console.log(`${jogo.nome} - ${jogo.plataforma}`);
    })
}

imprimirJogo("Jogos PS5", filtroPS5);
imprimirJogo("Jogos Xbox",filtroXbox);