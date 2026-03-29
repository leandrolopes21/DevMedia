let serie = ['Smallville', 'WandaVision', 'Loki', 'Gothan', 'Arrow', 'Flash', 'DC', 'Legends'];

function retornaSerieDia(indexSerie) {

    return serie[indexSerie];
}

let data = new Date();
let dia = data.getDay();

let dataOptions = { // Método de data retornando apenas o dia da semana
    weekday: 'long'
};

let serieDoDia = retornaSerieDia(dia);

console.log(`\n${data.toLocaleDateString('pt-BR', dataOptions).toUpperCase()}`);
console.log(`\nDia da semana em ordem numérica: ${dia}º dia`);
console.log(`Série do dia: ${serieDoDia}\n`);