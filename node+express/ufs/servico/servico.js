import { colecaoUfs } from "../dados/dados.js";

export const buscarUfs = () => {
    return colecaoUfs;
};

export const buscarUfPorNome = (nomeUf) => {
    return colecaoUfs.filter(uf => uf.nome.toLowerCase().includes(nomeUf.toLowerCase()));
};

export const buscarUfPorId = (id) => {
    const idUF = parseInt(id);
    return colecaoUfs.find(uf => uf.id === idUF);
};