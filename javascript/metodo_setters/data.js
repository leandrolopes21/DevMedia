const data = new Date();

data.setFullYear(1998); // Altera o ano
console.log(data);

data.setMonth(3); // Altera o mês (0 à 11)
console.log(data);

data.setDate(21); // Altera o dia do mês
console.log(data);

data.setHours(10); // Altera a hora (0 à 23)
console.log(data);

data.setMinutes(55); // Altera os minutos (0 à 59)
console.log(data);

data.setSeconds(25); // Altera os segundos (0 à 59)
console.log(data);

data.setMilliseconds(12); // Altera os milisegundos
console.log(data);

/*=======================================================*/
// Para cada método setter, tem um UTC

data.setUTCFullYear(1998); // Altera o ano
console.log(data);

data.setUTCMonth(3); // Altera o mês (0 à 11)
console.log(data);

data.setUTCDate(21); // Altera o dia do mês
console.log(data);

data.setUTCHours(10); // Altera a hora (0 à 23)
console.log(data);

data.setUTCMinutes(55); // Altera os minutos (0 à 59)
console.log(data);

data.setUTCSeconds(25); // Altera os segundos (0 à 59)
console.log(data);

data.setUTCMilliseconds(12); // Altera os milisegundos
console.log(data);