programa
{
	inclua biblioteca Matematica --> mat
	funcao inicio()
	{
		real quilo = 34.90
		real prato, valor_pagar
		escreva("Peso do prato do cliente - Kg: ")
		leia(prato)
		valor_pagar = prato*quilo
		escreva("Valor a pagar R$ ",mat.arredondar(valor_pagar,2))
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 262; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */