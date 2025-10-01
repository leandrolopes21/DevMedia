programa
{
	
	funcao inicio()
	{
		real valor
		real resultado_fahrenheit
		real resultado_milhas
		inteiro opcao = 0

		faca
		{

			escreva("Calculadora de conversões: Escolha uma opção:\n\n")
			
			escreva("1 - Celsius para Fahrenheit\n")
			escreva("2 - Quilometros para Milhas\n")
			escreva("3 - Sair\n\n")
			leia(opcao)
			
			escolha(opcao)
			{
				caso 1:
				
					escreva("\nInforme o valor que deseja converter: ")
					leia(valor)

					escreva("\nOpção escolhida = " + opcao + "\n")
					escreva("Valor digitado = " + valor + "\n")
				
					resultado_fahrenheit = (valor * 1.8) + 32
				
					escreva("\n" + valor + "° Celsius equivale a " + resultado_fahrenheit + "° Fahrenheit\n\n")
					pare
				
				caso 2:
				
					escreva("\nInforme o valor que deseja converter: ")
					leia(valor)

					escreva("\nOpção escolhida = " + opcao + "\n")
					escreva("Valor digitado = " + valor + "\n")
				
					resultado_milhas = valor * 0.621
				
					escreva("\n" + valor + " km equivale a " + resultado_milhas + " milhas\n\n")
					pare
				
				caso 3:
				
					escreva("\nVocê escolheu sair!!\n")
					pare

				caso contrario:
				
					escreva("\nValor Inválido!!\n\n")
			
			}
		
		}
		enquanto(opcao != 3)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1191; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */