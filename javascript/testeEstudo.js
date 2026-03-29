/* Código em Portugol
programa
{
  funcao inicio()
  {
    inteiro x = 6

    se(x % 2 == 0)
    {
      //Executa se o resultado da expressão for verdadeiro
      escreva(x +" é um número par")
    }
    senao
    {
      //Executa se o resultado da expressão for falso
      escreva(x +" é um número ímpar")
    }
  }
}
*/

// Mesmo código em JavaScript
let x = 7; // Variável do tipo number
let nome = "Leandro"; // Variável do tipo string
let genero = 'M'; // Variável do tipo char (Em JavaScript não existe o tipo char, usa-se string)
let estado = true; // Variável do tipo boolean (true ou false)

var estados = ["PR", "SC", "RS"]; // Variável do tipo array (vetor)
var pessoa = {nome: "Leandro", idade: 37, genero: 'M'}; // Variável do tipo objeto (struct)
var estadosSudeste = ["SP", "RJ", "MG", "ES"]; // Variável do tipo array (vetor)
estados[3] = "MS"; // Adicionando um novo elemento ao array (vetor)

// Array é declarado com colchetes []
// Objeto é declarado com chaves {}

// Estrutura condicional simples

/*
if (x % 2 == 0) {
    console.log(x + " é um número par");
} else {
    console.log(x + " é um número ímpar");
}
*/

// console.log(estados);
console.log(estados.length); // Acessando a quantidade de elementos do array (vetor)