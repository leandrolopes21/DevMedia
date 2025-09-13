programa
{
		funcao inicio()
	{
	inteiro anoNasc, anoAtual, idade
	escreva("Ano atual: ")
	leia(anoAtual)
	escreva("Ano de nascimento: ")
	leia(anoNasc)
	idade=anoAtual-anoNasc
	escreva("Você tem ou fará ",idade," anos")
	se(idade>=16)
	{
		escreva("\nVocê já pode votar!")	
	}
	senao
	{
		escreva("\nVocê ainda não pode votar, espere completar 16 anos!")
	}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 353; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */