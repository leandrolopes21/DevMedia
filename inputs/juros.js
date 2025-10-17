// Aplicação de juros da dívida
import divida from 'readline-sync';

console.log("\nAplicação de Juros:\n");

let valorDevido = divida.question("Informe o valor devido: R$ ");

if (valorDevido == 0) {

    console.log("Informe um valor maior que zero!\n");
    console.log("Aplicação encerrada.");

} else if (valorDevido > 0) {

    let diasAtraso = divida.question("Informe quantos dias se passaram após o vencimento do boleto: ");
    
    if (diasAtraso == 0) {
        
        console.log("Você está em dia!\n");
        console.log("Aplicação encerrada.");

    } else if (diasAtraso > 0 && diasAtraso <= 15) {

        let taxaJuros = 0.05;
        let percentual = taxaJuros * 100;
        let resultado = valorDevido * (1 + taxaJuros);

        console.log("\nValor original da dívida: R$ " + valorDevido);
        console.log("Dias atrasados: " + diasAtraso);
        console.log("Taxa de juros: " + percentual + "%");
        console.log("Valor total com juros: R$ " + resultado.toFixed(0) + "\n");
    
    } else if (diasAtraso > 15) {

        let taxaJuros = 0.10;
        let percentual = taxaJuros * 100;
        let resultado = valorDevido * (1 + taxaJuros);

        console.log("\nValor original da dívida: R$ " + valorDevido);
        console.log("Dias atrasados: " + diasAtraso);
        console.log("Taxa de juros: " + percentual + "%");
        console.log("Valor total com juros: R$ " + resultado.toFixed(0) + "\n");

    } else {

        console.log("Aplicação encerrada.");

    }
    
} else {

    console.log("Aplicação encerrada.");

}
