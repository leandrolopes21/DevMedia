import quiz from 'readline-sync';

console.log('\n---- QUIZ DE FATOS HISTÓRICOS ----\n');
console.log('Seja bem vindo jogador(a)!');
let nomeUsuario = quiz.question('Qual o seu nome? ');
// console.log('Bem vindo ' + nomeUsuario + '! Vamos jogar?');

/* Mensagem de encerramento */

/*
pontuação final ------ mensagem de encerramento
1 a 3 ---------------- OH NÃO! Tente mais uma vez.
4 a 6 ---------------- BOM TRABALHO! Pratique um pouco mais.
7 a 9 ---------------- MUITO BOM! Você acertou a maioria.
10 ------------------- EXCELENTE! Você é um verdadeiro expert.
*/