programa
{
	
	funcao inicio()
	{
		
		real F
		real resultado_fahrenheit
		real C
		real resultado_celsius
		
		/* Fórmula para converter temperatura Celsius para Fahrenheit:
			F = (°C * 1.8) +32
		*/

		/* Fórmula para converter temperatura Fahrenheit para Celsius:
			C = (°F - 32) / 1.8
		*/
		escreva("Conversor de temperatura\n\n")

		// Entrada de dados
		escreva("Digite a temperatura em Celsius: ")
		leia(C)

		// Cálculo
		resultado_fahrenheit = (C * 1.8) +32

		// Entrada de dados
		escreva("Digite a temperatura em Fahrenheit: ")
		leia(F)

		// Cálculo
		resultado_celsius = (F - 32) / 1.8

		escreva("\nVocê digitou " + C + " para Celsius\n")
		escreva("\nVocê digitou " + F + " para Fahrenheit\n")
		escreva("\nA temperatura digitada em Celsius (°" + C + ") e convertida para Fahrenheit é: " + resultado_fahrenheit + " °F\n")
		escreva("\nA temperatura digitada em Fahrenheit (°" + F + ") e convertida para Celsius é: " + resultado_celsius + " °C\n")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 949; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */