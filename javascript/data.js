const hoje = new Date();

// Imprimindo uma string com a data e a hora local
console.log(hoje.toLocaleString());

// Imprimindo uma string com a data armazenada
console.log(hoje.toString());

// Impimindo uma string com a data universal (UTC)
console.log(hoje.toUTCString());

// Imprimindo timestamp
console.log(hoje.valueOf());

const dataAtual = new Date();

// Métodos para objeto data (Getters)
console.log(dataAtual.getFullYear()); // Retorna o ano
console.log(dataAtual.getMonth()); // Retorna o mês (0 à 11)
console.log(dataAtual.getDate()); // Retorna o dia do mês
console.log(dataAtual.getHours()); // Retorna a hora (0 à 23)
console.log(dataAtual.getMinutes()); // Retorna os minutos (0 à 59)
console.log(dataAtual.getSeconds()); // Retorna os segundos (0 à 59)
console.log(dataAtual.getMilliseconds()); // Retorna os milisegundos (0 à 999)
console.log(dataAtual.getDay()); // Retorna o dia da semana (0 à 6)

// Para cada um destes métodos, existe o método UTC

console.log(dataAtual.getUTCFullYear());
console.log(dataAtual.getUTCMonth());
console.log(dataAtual.getUTCDate());
console.log(dataAtual.getUTCHours());
console.log(dataAtual.getUTCMinutes());
console.log(dataAtual.getUTCSeconds());
console.log(dataAtual.getUTCMilliseconds());
console.log(dataAtual.getUTCDay());

// Retornando timestamp da data
console.log(dataAtual.getTime());
// Retornando em minutos a diferença de fuso horário
console.log(dataAtual.getTimezoneOffset());
// Retornando o valor primitivo do objeto
console.log(dataAtual.valueOf());