programa
{
	
	funcao inicio()
	{
		inteiro num

		escreva("Informe um número qualquer: ")
		leia (num)

		enquanto (num!=-1)
		{
			se (num%2==0)
			{
				escreva("Este número é par!\n")
			}
			senao
			{
				escreva("Este número é impar!\n")
			}
			escreva("Informe um número qualquer: ")
			leia(num)
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 304; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */