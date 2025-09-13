programa
{
	inclua biblioteca Matematica --> mat
	funcao inicio()
	{
		real num_dias, idade
		escreva("Informe uma quantidade de dias: ")
		leia(num_dias)
		idade=num_dias/365
		escreva("Sua idade é: ", mat.arredondar(idade,1), " anos")
		se(idade>=18)
		{
			escreva("\nVocê é maior de idade!")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 226; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */