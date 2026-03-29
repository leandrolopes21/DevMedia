// Código explicando o método split()

let nome = "Leandro Alcides Lopes";
let quebrar = nome.split(" ");
let primeiroNome = quebrar[0];
let segundoNome = quebrar[1];
let terceiroNome = quebrar[2];

console.log(`Olá ${primeiroNome}! Espero que esteja bem.`);
console.log(`Seu segundo nome é ${segundoNome}?`);
console.log(`E seu último nome, é ${terceiroNome}?`);

console.log(quebrar);
console.log(`Array de ${quebrar.length} posições`);