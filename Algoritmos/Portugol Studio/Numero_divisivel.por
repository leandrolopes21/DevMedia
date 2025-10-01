programa
{
	
	funcao inicio()
	{
		inteiro num

		escreva("Digite um número: ")
		leia(num)
		escreva("\n")

		para(inteiro contador = 1; contador <= num; contador++)
		{
			se(num % contador == 0)
			{				
				escreva(num + " divisível por " + contador + "\n")
			}
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 112; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */