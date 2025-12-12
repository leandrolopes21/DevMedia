// Coleção de dados para os signos, com data inicial e data final
// O formato das datas dos signos tem o mês como 1º número e o dia como 2º número.
const dataNascimentoInput = document.getElementById('data');
const resultadoDiv = document.getElementById('resultado');
const botao = document.getElementById('btn');

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

const obterSigno = (data) => {
    
    let ano = data.getFullYear();

    for (const signo of colecao_signos) {
        let data_inicio_signo = new Date(ano + "-" + signo["DataInicio"] + " 00:00:00");
        let data_fim_signo = new Date(ano + "-" + signo["DataFim"] + " 23:59:59");

        if (signo.Nome === "Capricórnio") {
            // Capricórnio atravessa a virada do ano, então precisamos de uma lógica especial.
            // O signo vai de 22/12 a 19/01.
            // Criamos um intervalo para dezembro e outro para janeiro.
            const data_inicio_capricornio_dez = new Date((ano) + "-12-22 00:00:00");
            const data_fim_capricornio_dez = new Date((ano) + "-12-31 23:59:59");
            
            const data_inicio_capricornio_jan = new Date((ano) + "-01-01 00:00:00");
            const data_fim_capricornio_jan = new Date((ano) + "-01-19 23:59:59");

            if ((data >= data_inicio_capricornio_dez && data <= data_fim_capricornio_dez) || (data >= data_inicio_capricornio_jan && data <= data_fim_capricornio_jan)) {
                return signo.Nome;
            }
        } else if (data >= data_inicio_signo && data <= data_fim_signo) {
            return signo.Nome;
        }
    }
};

const exibirSigno = () => {
    // Pega o valor do input (ex: "2024-05-15") e adiciona o horário para evitar problemas de fuso horário
    const dataNascimentoString = dataNascimentoInput.value;
    if (!dataNascimentoString) {
        resultadoDiv.innerHTML = "Por favor, insira uma data de nascimento.";
        return;
    }

    const data_app = new Date(dataNascimentoString + "T00:00:00");
    const nome_signo = obterSigno(data_app);

    resultadoDiv.innerHTML = `Seu signo é: ${nome_signo}`;
};

// Adiciona o evento de clique ao botão, que chamará a função para exibir o signo.
botao.addEventListener('click', exibirSigno);