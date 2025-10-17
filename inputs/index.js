// import - Importa o plugin readline-sync
// Apelido - entradaDados
// from - de 'readline-sync'
// 'readline-sync' - Nome do plugin

import entradaDados from 'readline-sync'; // Importação do plugin readline-sync

// variável nome - Armazena o nome do usuário
// entradaDados - Objeto que permite entrada de dados
// question - função faz parte do readline-sync, é ela que implementa o input
let nome = entradaDados.question('Digite seu nome: ');
console.log("Olá," + nome + "!");