programa
{

	funcao inicio() // estrutura condicional escolha/caso
	{
		real celsius
		real fahrenheit
		inteiro conversor

		escreva("Qual conversor de temperatura deseja usar? \n\n")

		escreva("1 - Celsius para Fahrenheit\n")
		escreva("2 - Fahrenheit para celsius\n\n")

		leia(conversor)

		escolha (conversor)
		{
			caso 1:
			
				escreva("\nInforme a temperatura em Celsius: ")
				leia(celsius)

				fahrenheit = (celsius * 1.8) + 32

				escreva(celsius + " ⁰C equivale a " + fahrenheit + " ⁰F")
				pare

			caso 2:

				escreva("\nInforme a temperatura em fahrenheit: ")
				leia(fahrenheit)

				celsius = (fahrenheit - 32) / 1.8

				escreva(fahrenheit + " ⁰F equivale a " + celsius + " ⁰C")
				pare

			caso contrario:

				escreva("\nOpção Inválida")
				pare
		}
	}
	
     /*funcao inicio() estrutura condicional se/senao
	{
		real celsius
		real fahrenheit
		inteiro conversor

		escreva("Qual conversor de temperatura deseja usar? \n\n")

		escreva("1 - Celsius para Fahrenheit\n")
		escreva("2 - Fahrenheit para celsius\n\n")

		leia(conversor)

		se (conversor == 1)
		{
			escreva("\nInforme a temperatura em Celsius: ")
			leia(celsius)

			fahrenheit = (celsius * 1.8) + 32

			escreva(celsius + " ⁰C equivale a " + fahrenheit + " ⁰F")
		}
		senao se (conversor == 2)
		{
			escreva("\nInforme a temperatura em fahrenheit: ")
			leia(fahrenheit)

			celsius = (fahrenheit - 32) / 1.8

			escreva(fahrenheit + " ⁰F equivale a " + celsius + " ⁰C")
		}
		senao
		{
			escreva("\nOpção Inválida!!")
		}
	}
	*/
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 683; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */