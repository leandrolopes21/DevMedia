programa
{
	
	funcao inicio()
	{
		inteiro a, b, c, x, y, delta=0

		escreva("Vamos calcular o Delta?\n")
		escreva("Digite o valor de * a *: ")
		leia(a)
		escreva("Digite o valor de * b *: ")
		leia(b)
		escreva("Digite o valor de * c *: ")
		leia(c)
		escreva("Informe o valor de * x *: ")
		leia(x)

		delta = ((b*b)-(4*a*c))
		y = ((a*(x*x))+(b*x)+c)

		escreva("Valor do Delta: ", delta, "\n")
		escreva("Valor de y - (f(x)): ", y)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 418; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */