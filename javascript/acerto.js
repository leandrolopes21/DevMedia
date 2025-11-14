const totalAcertos = 4;
const primeiroAcerto = new Date('2025/10/05');

let index = 0;

do {

    console.log(primeiroAcerto.toDateString()); // Retorna uma string com a data apenas

    const dia = primeiroAcerto.getDate(); // Retorna o dia do mês
    primeiroAcerto.setDate(dia + 1); // Altera o dia do mês somando mais 1 dia

    index++;

} while ( index < totalAcertos );
