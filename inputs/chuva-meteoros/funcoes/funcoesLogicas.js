import chuvaDeMeteoros from "../data/chuva-de-meteoros.js";

let data = new Date();

function filtraChuvaHoje(chuva) {
    
    const anoAtual = data.getFullYear();
    const [mesInicio, diaInicio] = chuva.inicio.split('/');
    const [mesFim, diaFim] = chuva.fim.split('/');

    const dataInicio = new Date(anoAtual, mesInicio - 1, diaInicio);
    const dataFim = new Date(anoAtual, mesFim - 1, diaFim);
    const dataAtual = new Date(anoAtual, data.getMonth(), data.getDate());

    if (dataInicio > dataFim) {
        return dataAtual >= dataInicio || dataAtual <= dataFim;
    }
    return dataAtual >= dataInicio && dataAtual <= dataFim;
}

let chuvaHojeFiltrada = chuvaDeMeteoros.filter(filtraChuvaHoje);

chuvaHojeFiltrada.forEach(chuva => {
    console.log(chuva.nome);
});

function filtrarChuvasSeguintes() {}