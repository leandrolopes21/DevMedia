programa
{
	
	funcao inicio()
	{
		inteiro numero
		inteiro resultado = 0

		escreva("Digite um numero: ")
		leia(numero)

		para(inteiro contador = 0; contador <= numero; contador++)
		{
			se(contador % 2 == 0)
			{
				resultado = resultado - contador
				// escreva(resultado) // Apenas para verificacao passo a passo e entendimento
			}
			senao
			{
				resultado = resultado + contador
				// escreva(resultado) // Apenas para verificacao passo a passo e entendimento
			}
		}
		escreva("\nResultado: " + resultado)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 405; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */