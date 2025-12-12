const colecao_signos = [
    {"Nome": "Aquário", "DataInicio": "01-20", "DataFim": "02-18"}, // Índice 0
    {"Nome": "Peixes", "DataInicio": "02-19", "DataFim": "03-20"}, // Índice 1
    {"Nome": "Áries", "DataInicio": "03-21", "DataFim": "04-19"}, // Índice 2
    {"Nome": "Touro", "DataInicio": "04-20", "DataFim": "05-20"}, // Índice 3
    {"Nome": "Gêmeos", "DataInicio": "05-21", "DataFim": "06-21"}, // Índice 4
    {"Nome": "Câncer", "DataInicio": "06-22", "DataFim": "07-23"}, // Índice 5
    {"Nome": "Leão", "DataInicio": "07-24", "DataFim": "08-22"}, // Índice 6
    {"Nome": "Virgem", "DataInicio": "08-23", "DataFim": "09-22"}, // Índice 7
    {"Nome": "Libra", "DataInicio": "09-23", "DataFim": "10-22"}, // Índice 8
    {"Nome": "Escorpião", "DataInicio": "10-23", "DataFim": "11-21"}, // Índice 9
    {"Nome": "Sagitário", "DataInicio": "11-22", "DataFim": "12-21"}, // Índice 10
    {"Nome": "Capricórnio", "DataInicio": "12-22", "DataFim": "01-19"}, // Índice 11
];

const retorna_signo = (data) => {

    // Obtém o dia e o mês da data fornecida. O mês é baseado em zero (0-11), então adicionamos 1.
    const dia = data.getDate();
    const mes = data.getMonth() + 1;

    for (const signo of colecao_signos) {
        // Divide as strings de data em mês e dia
        const [mesInicio, diaInicio] = signo.DataInicio.split('-').map(Number);
        const [mesFim, diaFim] = signo.DataFim.split('-').map(Number);

        // Lógica para signos que não atravessam a virada do ano
        if (mesInicio <= mesFim) {
            if ((mes === mesInicio && dia >= diaInicio) || (mes === mesFim && dia <= diaFim) || (mes > mesInicio && mes < mesFim)) {
                return signo.Nome;
            }
        } else { // Lógica para Capricórnio (atravessa a virada do ano)
            if ((mes === mesInicio && dia >= diaInicio) || (mes === mesFim && dia <= diaFim) || mes > mesInicio || mes < mesFim) {
            return signo.Nome;
            }
        }
    }
}

let data_app = new Date();

const nome_signo = retorna_signo(data_app);

console.log("O signo de hoje é: " + nome_signo);