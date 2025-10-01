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
let x = 6;

if (x % 2 == 0) {
    console.log(x + " é um número par");
} else {
    console.log(x + " é um número ímpar");
}