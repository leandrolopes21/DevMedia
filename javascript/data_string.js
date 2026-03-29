const dataAtual = new Date();

// Vai imprimir "10/11/2025, 17:16:45"
console.log("Imprimindo 1º) " + dataAtual.toLocaleString()); // Retorna uma string com apenas a data e o tempo

// Vai imprimir "Mon Nov 10 2025"
console.log("Imprimindo 2º) " + dataAtual.toDateString()); // Retorna uma string com a data apenas

// Vai imprimir "10/11/2025"
console.log("Imprimindo 3º) " + dataAtual.toLocaleDateString()); // Retorna uma string com a data apenas

// Vai imprimir "17:37:59"
console.log("Imprimindo 4º) " + dataAtual.toLocaleTimeString()); // Retorna uma string com o tempo apenas

// Vai imprimir "17:24:02 GMT-0300 (Horário Padrão de Brasília)"
console.log("Imprimindo 5º) " + dataAtual.toTimeString()); // Retorna uma string com o tempo

// Vai imprimir "2025-11-10T20:31:15.838Z"
console.log("Imprimindo 6º) " + dataAtual.toISOString()); // Retorna uma string com um formato universal (ISO 8601)
// O horário retornado será sempre com o fuso horário 0

// Vai imprimir "Mon Nov 10 2025 17:16:45 GMT-0300 (Horário Padrão de Brasília)"
console.log("Imprimindo 7º) " + dataAtual.toString()); // Retorna uma string que representa o objeto

// Impimindo uma string com a data universal (UTC)
// Vai imprimir "Mon, 10 Nov 2025 20:16:45 GMT"
console.log("Imprimindo 8º) " + dataAtual.toUTCString());

// Imprimindo timestamp
// Vai imprimir "1762805805474"
console.log("Imprimindo 9º) " + dataAtual.valueOf());

/*======================================================*/