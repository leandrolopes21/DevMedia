// Coleção de dados para os signos, com data inicial e data final
// O formato das datas dos signos tem o mês como 1º número e o dia como 2º número.
var dataNascimento = document.getElementById('data');
var res = document.getElementById('resultado');

let colecao_signos = [
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

const verifica_data_range = (data, data_inicio, data_fim, tipo_comparacao) => {

    if (tipo_comparacao == "and") {
        return (data >= data_inicio && data <= data_fim);
    } else if (tipo_comparacao == "or") {
        return (data >= data_inicio || data <= data_fim);
    }
}

const retorna_signo = (signos, data) => {

    let ano = data.getFullYear();

    for (const signo of signos) {

        let data_inicio_signo = new Date(ano + "-" + signo["DataInicio"] + " 00:00:00");
        let data_fim_signo = new Date(ano + "-" + signo["DataFim"] + " 23:59:59");

        // var data_inicial = signo["DataInicio"];
        let tipo_comparacao = signo["DataInicio"] == "12-22" ? "or" : "and";

        if (verifica_data_range(data, data_inicio_signo, data_fim_signo, tipo_comparacao)) {
            return signo["Nome"];
        }        
    }
}

const options = {
    weekday: 'long',
    month: "numeric",
    year: "numeric",
    day: "numeric"
};

let data_app = new Date(dataNascimento.value);

const nome_signo = retorna_signo(colecao_signos, data_app);

// res.innerHTML = `${nome_signo}`;

// console.log("Data de hoje: " + data_app.toLocaleString('pt-BR', options));
// console.log("O signo de hoje é: " + nome_signo);