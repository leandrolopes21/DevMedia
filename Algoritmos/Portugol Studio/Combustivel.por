programa
{
	inclua biblioteca Matematica --> mat
	funcao inicio()
	{
		real qtdeDin, valComb, qtdeLitros
		escreva("Quanto custa o litro do combustivel? R$ ")
		leia(valComb)
		escreva("Quantos reais voce tem? R$ ")
		leia(qtdeDin)
		qtdeLitros=qtdeDin/valComb
		escreva("Com R$ ",mat.arredondar(qtdeDin,0), " voce consegue abastecer ",mat.arredondar(qtdeLitros,2), " litros de combustivel.")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 363; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */