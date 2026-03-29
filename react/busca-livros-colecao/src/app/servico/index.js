import { listaDeLivros } from "../dados/dados.js";

// Mostrar todos os livros da coleção
export const retornaLivros = () => {
    return listaDeLivros;
};

// Buscar livros usando texto digitado no input
export const buscaLivro = (textoDigitado) => {
    return listaDeLivros.filter((livro) =>
        livro.titulo.toLowerCase().includes(textoDigitado.toLowerCase()) ||
        livro.autor.toLowerCase().includes(textoDigitado.toLowerCase()) ||
        livro.categoria.toLowerCase().includes(textoDigitado.toLowerCase())
    );
};

// Buscar livros usando um filter: NÃO UTILIZADO NO MOMENTO, NECESSÁRIO CRIAR UM BOTÃO PARA UTILIZAR
/*
export const filtraLivro = (categoria) => {
    return listaDeLivros.filter((livro) => livro.categoria === categoria);
}
*/ 