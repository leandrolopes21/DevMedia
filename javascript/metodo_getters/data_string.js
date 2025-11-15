const dataAtual = new Date();

const dataAtualLocaleString = dataAtual.toLocaleString();
const dataAtualDateString = dataAtual.toDateString();
const dataAtualLocaleDateString = dataAtual.toLocaleDateString();
const dataAtualLocaleTimeString = dataAtual.toLocaleTimeString();
const dataAtualTimeString = dataAtual.toTimeString();
const dataAtualISOString = dataAtual.toISOString();
const dataAtualString = dataAtual.toString();
const dataAtualUTCString = dataAtual.toUTCString();
const dataAtualValue = dataAtual.valueOf();
const ano = dataAtual.getFullYear();
const mes = dataAtual.getMonth();
const hora = dataAtual.getHours(); 

// Vai imprimir "10/11/2025, 17:16:45"
console.log(`\nImprimindo 1º) ${dataAtualLocaleString.padEnd(70, '.')} - // Retorna uma string com apenas a data e o tempo`);

// Vai imprimir "Mon Nov 10 2025"
console.log(`Imprimindo 2º) ${dataAtualDateString.padEnd(70, '.')} - // Retorna uma string com a data apenas`);

// Vai imprimir "10/11/2025"
console.log(`Imprimindo 3º) ${dataAtualLocaleDateString.padEnd(70, '.')} - // Retorna uma string com a data apenas`);

// Vai imprimir "17:37:59"
console.log(`Imprimindo 4º) ${dataAtualLocaleTimeString.padEnd(70, '.')} - // Retorna uma string com o tempo apenas`);

// Vai imprimir "17:24:02 GMT-0300 (Horário Padrão de Brasília)"
console.log(`Imprimindo 5º) ${dataAtualTimeString.padEnd(70, '.')} - // Retorna uma string com o tempo`);

// Vai imprimir "2025-11-10T20:31:15.838Z"
console.log(`Imprimindo 6º) ${dataAtualISOString.padEnd(70, '.')} - // Retorna uma string com um formato universal (ISO 8601)`);
// O horário retornado será sempre com o fuso horário 0

// Vai imprimir "Mon Nov 10 2025 17:16:45 GMT-0300 (Horário Padrão de Brasília)"
console.log(`Imprimindo 7º) ${dataAtualString.padEnd(70, '.')} - // Retorna uma string que representa o objeto`);

// Impimindo uma string com a data universal (UTC)
console.log(`Imprimindo 8º) ${dataAtualUTCString.padEnd(70, '.')} - // Impimindo uma string com a data universal (UTC)`);

// Imprimindo timestamp
// Para usar padEnd em um número, primeiro o convertemos para string.
console.log(`Imprimindo 9º) ${dataAtualValue.toString().padEnd(70, '.')} - // Imprimindo timestamp`);

// Imprimindo o ano
// Para usar padEnd em um número, primeiro o convertemos para string.
console.log(`Imprimindo 10º) ${ano.toString().padEnd(69, '.')} - // Retorna o ano`);

// Imprimindo o mês
console.log(`Imprimindo 11º) ${mes.toString().padEnd(69, '.')} - // Retorna o mês`);

// Imprimindo a hora
console.log(`Imprimindo 12º) ${hora.toString().padEnd(69, '.')} - // Retorna a hora\n`)

/*======================================================*/