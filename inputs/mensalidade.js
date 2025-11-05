<<<<<<< Updated upstream
import mensal from 'readline-sync';

//let valor_mensalidade = 100;
let taxa_multa = 0.02; // 2%
//let total_dias = 10;
let contador = 1;

let valor_mensalidade = mensal.question("\nQual o valor da mensalidade? ");
let total_dias = mensal.question("Quantos dias de atraso? ");

console.log("\nValor da mensalidade: R$ " + valor_mensalidade);
console.log("Dias em atraso: " + total_dias + "\n");

let valor_mensalidade_number = Number(valor_mensalidade); // Todo valor numérico digitado é recebido em string e precisa ser convertido em número

while (contador <= total_dias) {

    let dias_atraso = contador;
    let valor_multa = valor_mensalidade_number * taxa_multa * dias_atraso;
    let novo_valor_mensalidade = valor_mensalidade_number + valor_multa;

    console.log("Dia(s) de atraso: " + dias_atraso + " - mensalidade atualizada: R$" + novo_valor_mensalidade + ",00");

    contador++;
    
}

/*
=======
let valor_mensalidade = 100;
let taxa_multa = 0.02; // 2%
let total_dias = 10;
let contador = 1;

>>>>>>> Stashed changes
do {

    let dias_atraso = contador;
    let valor_multa = valor_mensalidade * taxa_multa * dias_atraso;
    let novo_valor_mensalidade = valor_mensalidade + valor_multa;

    console.log("Dia(s) de atraso: " + dias_atraso + " - mensalidade atualizada: R$" + novo_valor_mensalidade + ",00");

    contador++;
<<<<<<< Updated upstream
} while (contador < total_dias);
 */
=======
} while (contador < total_dias);
>>>>>>> Stashed changes
