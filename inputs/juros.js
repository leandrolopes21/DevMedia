// Aplicação que calcula juros de dívida, para o projeto DevMedia
import atraso from 'readline-sync';

console.log("\nAplicação de Juros:\n");

let valor = atraso.question("Informe o valor devido: R$ ");
let taxaJuros;
let percentual;
let resultado;

if (valor == 0) {
    
    console.log("O valor da dívida deve ser maior que zero!");
    console.log("Aplicação encerrada!");

} else if (valor > 0){
    
    let dias = atraso.question("Informe quantos dias se passaram desde o vencimento do boleto: ");

    if (dias == 0) {
        
        console.log("Você está em dia!");
        console.log("Aplicação encerrada!");

    } else if (dias > 0 && dias <= 15) {
        
        taxaJuros = 0.05;
        percentual = taxaJuros * 100;
        resultado = valor * (1 + taxaJuros);

        console.log("\nValor original da dívida: R$ " + valor);
        console.log("Dias atrasados: " + dias);
        console.log("Taxa de juros: " + percentual + "%");
        console.log("Valor total com juros: R$ " + resultado.toFixed(0) + "\n");
        
    } else if (dias > 15) {
        
        taxaJuros = 0.10;
        percentual = taxaJuros * 100;
        resultado = valor * (1 + taxaJuros);

        console.log("\nValor original da dívida: R$ " + valor);
        console.log("Dias atrasados: " + dias);
        console.log("Taxa de juros: " + percentual + "%");
        console.log("Valor total com juros: R$ " + resultado.toFixed(0) + "\n");
        
    } else {
        console.log("Aplicação encerrada!");
    }
} else {
    console.log("Aplicação encerrada!");
}

