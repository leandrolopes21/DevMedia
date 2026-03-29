import nomes from "./nomes.js";

function ListaNomes() {
    const filtroNomes = nomes.filter(nome => nome.length > 3);

    return filtroNomes;
}

console.log(ListaNomes());