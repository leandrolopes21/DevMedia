programa {
  funcao inicio() {

    real num1
    real num2
    
    real soma
    real subtracao
    real multiplicacao
    real divisao

    escreva ("Digite um número: ")
    leia (num1)

    escreva ("Digite outro número: ")
    leia (num2)

    soma = num1 + num2
    subtracao = num1 - num2
    multiplicacao = num1 * num2
    divisao = num1 / num2

    escreva ("Resultado soma = " + soma + "\n")
    escreva ("Resultado subtração = " + subtracao + "\n")
    escreva ("Resultado multiplicação = " + multiplicacao + "\n")
    escreva ("Resultado divisão = " + divisao + "\n")
    
  }
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 580; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */