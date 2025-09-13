programa
{
	
	funcao inicio()
	{
		inteiro num, contador, resposta
		contador=0

		escreva("Qual o número que você deseja ver a tabuada? ")
		leia(num)

		enquanto (contador<=10)
		{
			resposta = num * contador
			escreva (num, " x ", contador, " = ", resposta, "\n")
			contador++
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 282; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */