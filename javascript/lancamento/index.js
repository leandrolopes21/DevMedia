const perifericos = [
    { nome: 'Teclado Mecânico', lancamento: '2025-08-02' },
    { nome: 'Mouse RGB', lancamento: '2022-08-15' },
    { nome: 'Headset Surround', lancamento: '2023-07-20' },
    { nome: 'Mousepad Gamer', lancamento: '2021-08-10' },
    { nome: 'Monitor Ultrawide', lancamento: '2023-08-25' },
    { nome: 'Cadeira Gamer', lancamento: '2026-08-05' },
    { nome: 'Webcam Full HD', lancamento: '2023-08-18' },
    { nome: 'Microfone Profissional', lancamento: '2020-08-12' },
    { nome: 'Impressora 3D', lancamento: '2023-05-30' },
    { nome: 'Scanner de Alta Resolução', lancamento: '2026-05-15' }
];

const filtrarLancamentosDoMes = () => {
    let dataAtual = new Date();
    let mesAtual = dataAtual.getMonth();
    let anoAtual = dataAtual.getFullYear();

    const lancamentosDoMes = perifericos.filter(periferico => {
        const dataLancamento = new Date(periferico.lancamento);
        const anoLancamento = dataLancamento.getFullYear();
        const mesLancamento = dataLancamento.getMonth();

        return anoLancamento === anoAtual && mesLancamento === mesAtual;
    });

    return lancamentosDoMes;
}

console.log(filtrarLancamentosDoMes());