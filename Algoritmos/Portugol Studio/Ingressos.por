programa
{
	
	funcao inicio()
	{
		inteiro cadeiras_disponiveis = 20
		inteiro ingresso = 0

		escreva("Ingressos de cinema\n")
		escreva("Cadeiras disponíveis: "+ cadeiras_disponiveis + "\n\n")

		// Estrutura de repetição, será executada enquanto houver cadeiras disponíveis - cadeiras > 0
		enquanto(cadeiras_disponiveis > 0)
		{
			escreva("Quantos ingressos deseja comprar? ")
			leia(ingresso)

			se(ingresso > cadeiras_disponiveis) // Verifica se o valor da quantidade de ingressos é maior que o disponível e informa o usuário
			{
				escreva("\nVocê tentou comprar " + ingresso + " ingresso(s)\n")
				escreva("Cadeiras disponíveis: " + cadeiras_disponiveis + "\n\n")
			}
			senao
			{
				cadeiras_disponiveis = cadeiras_disponiveis - ingresso
				escreva("\nVocê comprou " + ingresso + " ingresso(s)\n")

				se(cadeiras_disponiveis == 0) // Verifica se a quantidade de cadeiras disponíveis é zero, e se for, a execução é interrompida
				{
					escreva("Não temos mais cadeiras disponíveis!")
					pare
				}
				senao
				{
					escreva("Cadeiras disponíveis: " + cadeiras_disponiveis + "\n\n")
				}
			}

		}		
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 952; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */