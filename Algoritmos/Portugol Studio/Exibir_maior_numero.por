programa
{
	
	funcao inicio()
	{
		real cont, num, maior=0

		para (cont=1;cont<=15;cont++)
		{
			escreva("Informe o ", cont, " o. número:")
			leia(num)
			se (num>maior)
			{
				maior=num
			}
			
		}
		escreva("O maior número informado foi ", maior)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 254; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */