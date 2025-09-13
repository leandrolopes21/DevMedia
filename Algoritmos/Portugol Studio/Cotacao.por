programa
{
	inclua biblioteca Matematica --> mat
	funcao inicio()
	{
		real reais, dolar,conversao
		escreva("Quantos reais voce possui? ")
		leia(reais)
		escreva("Qual a cotacao do dolar hoje? ")
		leia(dolar)
		conversao = reais/dolar
		escreva("Voce pode comprar U$ ",mat.arredondar(conversao,2))
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 268; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */