programa
{
	
	funcao inicio()
	{
		inteiro limite, contador, num, par=0, impar=0

		escreva ("A sequência irá de 1 até quanto? ")
		leia (limite)

		para (contador=1; contador<=limite; contador++)
		{
			escreva ("Informe o ", contador, "o. número:\n")
			leia(num)
			se (num%2==0)
			{
				par++
			}
			senao
			{
				impar++
			}
			escreva("Quantidade de números pares: ", par, "\n")
			escreva("Quantidade de números impares: ", impar, "\n")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 167; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */