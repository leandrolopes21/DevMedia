let paginas = [
    {pagina: 'Blog', acessos: 200},
    {pagina: 'Vídeos', acessos: 250},
    {pagina: 'Notícias', acessos: 122},
    {pagina: 'Downloads', acessos: 300},
    {pagina: 'Perfil', acessos: 148},
];

const verificaMaisAcessadas = paginas.filter(item => item.acessos >= 200).map(item => item.pagina);

verificaMaisAcessadas.forEach(nome => console.log(nome));