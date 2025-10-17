// Pega a data atual
const data_atual = new Date();

// Pega o mês atual como número (0..11)
// Nota: Date.getMonth() retorna valores de 0 (janeiro) a 11 (dezembro).
// Ajustamos os cases abaixo para usarem 0..11, compatíveis com getMonth().
const mes_atual = data_atual.getMonth();

// Usa switch para mapear o número do mês para a estação do ano.
// Cada bloco de cases agrupa meses que compartilham a mesma estação.
switch (mes_atual) {
    // Meses 0, 1, 2 -> Verão (jan, fev, mar)
    case 0:
    case 1:
    case 2:
        // 1º trimestre: jan, fev, mar
        console.log('1º trimestre');
        break;

    // Meses 3, 4, 5 -> Outono (abr, mai, jun)
    case 3:
    case 4:
    case 5:
        // 2º trimestre: abr, mai, jun
        console.log('2º trimestre');
        break;

    // Meses 6, 7, 8 -> Inverno (jul, ago, set)
    case 6:
    case 7:
    case 8:
        // 3º trimestre: jul, ago, set
        console.log('3º trimestre');
        break;

    // Meses 9, 10, 11 -> Primavera (out, nov, dez)
    case 9:
    case 10:
    case 11:
        // 4º trimestre: out, nov, dez
        console.log('4º trimestre');
        break;

    // Caso nenhum dos cases anteriores seja verdadeiro
    default:
        // Este default agora só executará se `mes_atual` não for um inteiro de 0..11
        // Imprime o valor atual para facilitar debug (usa template string)
        console.log(`Mês inválido: ${mes_atual} — valor esperado: 0..11`);
        break;
}