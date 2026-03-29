import escolha from 'readline-sync';

let salarioMinimo = [
    { ano: 2010, salario: 510 },
    { ano: 2011, salario: 545 },
    { ano: 2012, salario: 622 },
    { ano: 2013, salario: 678 },
    { ano: 2014, salario: 724 },
    { ano: 2015, salario: 788 },
    { ano: 2016, salario: 880 },
    { ano: 2017, salario: 937 },
    { ano: 2018, salario: 954 },
    { ano: 2019, salario: 998 },
    { ano: 2020, salario: 1045 },
];

let dadosIpca = [
    { ano: 2010, ipca: 5.91 },
    { ano: 2011, ipca: 6.50 },
    { ano: 2012, ipca: 5.84 },
    { ano: 2013, ipca: 5.91 },
    { ano: 2014, ipca: 6.41 },
    { ano: 2015, ipca: 10.67 },
    { ano: 2016, ipca: 6.29 },
    { ano: 2017, ipca: 2.95 },
    { ano: 2018, ipca: 3.75 },
    { ano: 2019, ipca: 4.31 },
    { ano: 2020, ipca: 4.52 },
];

console.log("Escolha uma das alternativas:\n");
console.log("1 - Listar os salários mínimos de 2010 à 2020");
console.log("2 - Listar o índice IPCA de 2010 à 2020");
console.log("3 - Comparação entre o percentual de aumento salarial e o IPCA\n");

let numEscolhido = escolha.question("Digite o número da sua escolha: ");

for (let i = 0; i < salarioMinimo.length; i++) {

    if (numEscolhido == 1) {

        let ano = salarioMinimo[i].ano;
        let salario = salarioMinimo[i].salario;
        let salarioFormatado = salario.toFixed(2).replace(".", ",");

        console.log("\nAno: ".padEnd(40, ".") + ano);
        console.log("Salário Mínimo: ".padEnd(39, ".") + "R$ " + salarioFormatado);

    } else if (numEscolhido == 2) {

        let ano = dadosIpca[i].ano;
        let ipca = dadosIpca[i].ipca;
        let ipcaFormatado = ipca.toFixed(2).replace(".", ",");

        console.log("\nAno: ".padEnd(40, ".") + ano);
        console.log("Índice IPCA: ".padEnd(39, ".") + ipcaFormatado + "%");

    } else if (numEscolhido == 3) {

        let ano = salarioMinimo[i].ano;
        let salario = salarioMinimo[i].salario;
        let ipca = dadosIpca[i].ipca;
        let salarioFormatado = salario.toFixed(2).replace(".", ",");
        let ipcaFormatado = ipca.toFixed(2).replace(".", ",");

        if (i > 0) {

            let salarioAnterior = salarioMinimo[i - 1].salario;
            let diferenca = salario - salarioAnterior;
            let crescimentoSalarial = (diferenca / salarioAnterior) * 100;

            console.log("\nAno: ".padEnd(40, ".") + ano);
            console.log("Salário Mínimo: ".padEnd(39, ".") + "R$ " + salarioFormatado);
            console.log("Crescimento Salarial a.a: ".padEnd(39, ".") + crescimentoSalarial.toFixed(2) + "%");
            console.log("Índice IPCA: ".padEnd(39, ".") + ipcaFormatado + "%");

        } else {

            console.log("\nAno: ".padEnd(40, ".") + ano);
            console.log("Salário Mínimo: ".padEnd(39, ".") + "R$ " + salarioFormatado);
            console.log("Crescimento Salarial: ".padEnd(39, ".") + "-");
            console.log("Índice IPCA: ".padEnd(39, ".") + ipcaFormatado + "%");

        }        
    }
}
