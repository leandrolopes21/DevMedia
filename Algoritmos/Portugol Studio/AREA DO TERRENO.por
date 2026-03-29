programa
{
	inclua biblioteca Matematica --> mat
	funcao inicio()
	{
		real area, largura, profundidade
		escreva("Largura do terreno em metros ")
		leia(largura)
		escreva("Profundidade do terreno em metros ")
		leia(profundidade)
		area = largura*profundidade
		escreva("A area do terreno = ", mat.arredondar(area,0), " m2")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 319; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */