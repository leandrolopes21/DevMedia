// Algoritmo para exibir a série de Fibonacci!!!
// Como exemplo, a série de Fibonacci é uma sequência de números inteiros iniciada com 0 e 1 na qual os termos subsequentes correspondem à soma dos dois termos anteriores.
// Exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...

programa
{
	
	funcao inicio()
	{
		inteiro fibonacci=0, termo_anterior=0, termo_atual=1, cont, qtdeTermos=0

		escreva("Informe um número para exibir a série de Fibonacci: ")
		leia(qtdeTermos)
		escreva("Os termos são: \n", termo_anterior, "\n", termo_atual, "\n")

		para (cont=1; cont<=qtdeTermos; cont++)
		
		{
			fibonacci=termo_anterior+termo_atual
			termo_anterior=termo_atual
			termo_atual=fibonacci
			escreva(fibonacci, "\n")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 707; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */