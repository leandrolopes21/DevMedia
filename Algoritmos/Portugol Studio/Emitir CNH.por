programa
{
	//Este programa é para identificar as pessoas que podem ou não tirar a carteira de habilitação!!
	funcao inicio()
	{
		inteiro contador, idade

		para (contador=1;contador<=5;contador++)
		{ 
			escreva("Qual a ", contador,"a. idade? ")
			leia(idade)
			se (idade>=18)
			{
				escreva("Parabens, voce pode tirar sua CNH!\n")
			}
			senao
			{
				escreva("Infelizmente voce ainda nao pode tirar sua CNH!! :(:(\n")
			}
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 154; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */