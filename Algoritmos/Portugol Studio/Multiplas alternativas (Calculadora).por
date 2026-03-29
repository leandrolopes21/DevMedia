programa
{
	funcao inicio()
	{
		real num1, num2, resultado, op
		escreva("Informe o 1. numero: ")
		leia(num1)
		escreva("Informe o 2. numero: ")
		leia(num2)
		escreva("_______________________\n")
		escreva("Escolha a operacao matematica: \n")
		escreva("1 - Adicao\n")
		escreva("2 - Subtracao\n")
		escreva("3 - Divisao\n")
		escreva("4 - Multiplicacao\n")
		escreva("Opcao: ")
		leia(op)
		se (op==1)
		{
			resultado=num1+num2
			escreva(num1, " + ", num2, " = ", resultado)
		}
		senao se (op==2)
		{
			resultado=num1-num2
			escreva(num1, " - ", num2, " = ", resultado)
		}
		senao se (op==3)
		{
			resultado=num1/num2
			escreva(num1, " / ", num2, " = ", resultado)
		}
		senao se (op==4)
		{
			resultado=num1*num2
			escreva(num1, " * ", num2, " = ", resultado)
		}
		senao
		{
			escreva("Opcao invalida!!!")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 822; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */