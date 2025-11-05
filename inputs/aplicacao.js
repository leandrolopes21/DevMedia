import escolha from 'readline-sync';

let dados = [
    { ano: 2010, salarioMinimo: 510.00, ipca: 5.91 },
    { ano: 2011, salarioMinimo: 545.00, ipca: 6.50 },
    { ano: 2012, salarioMinimo: 622.00, ipca: 5.84 },
    { ano: 2013, salarioMinimo: 678.00, ipca: 5.91 },
    { ano: 2014, salarioMinimo: 724.00, ipca: 6.41 },
    { ano: 2015, salarioMinimo: 788.00, ipca: 10.67 },
    { ano: 2016, salarioMinimo: 880.00, ipca: 6.29 },
    { ano: 2017, salarioMinimo: 937.00, ipca: 2.95 },
    { ano: 2018, salarioMinimo: 954.00, ipca: 3.75 },
    { ano: 2019, salarioMinimo: 998.00, ipca: 4.31 },
    { ano: 2020, salarioMinimo: 1045.00, ipca: 4.52 },
];

for (let dado of dados) {

    let ano =+ dado.ano;
    let salario =+ dado.salarioMinimo;
    let ipca =+ dado.ipca;

    let contador = 0;

    // console.log("\nAno: ".padEnd(30, ".") + ano);
    // console.log("Salário Mínimo: ".padEnd(30, ".") + "R$ " + salario + ",00");
    // console.log("Índice IPCA: ".padEnd(30, ".") + ipca.toFixed(2) + "%");

    
    console.log("Escolha uma das alternativas:\n");
    console.log("1 - Listar os salários mínimos de 2010 à 2020");
    console.log("2 - Listar o índice IPCA de 2010 à 2020");
    console.log("3 - Comparação entre o percentual de aumento salarial e o IPCA\n");

    let numEscolhido = escolha.question("Digite o número da sua escolha: ");

    if (numEscolhido == 1) {

        while (contador <= dados.length) {
            
            console.log("\nAno: ".padEnd(30, ".") + ano);
            console.log("Salário Mínimo: ".padEnd(30, ".") + "R$ " + salario + ",00\n");
            contador++;
        }        

    } else if (numEscolhido == 2) {

        while (contador <= dados.length) {
        
            console.log("\nAno: ".padEnd(30, ".") + ano);
            console.log("Índice IPCA: ".padEnd(30, ".") + ipca.toFixed(2) + "%\n");
            contador++;

        }

    } else if (numEscolhido == 3) {

        while (contador <= dados.length) {

            let aumentoPercentual = ((salario - 510) / 510) * 100;
            console.log("\nAno: " + ano + " - Aumento Percentual: " + aumentoPercentual.toFixed(2) + "% - Índice IPCA: " + ipca.toFixed(2) + "%\n");
            contador++;
            
        }        

    } else {
        
        console.log("\nOpção inválida. Por favor, escolha 1, 2 ou 3.\n");

    }

}

