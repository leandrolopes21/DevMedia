programa
{
	
	funcao inicio()
	{
		real valor_emprestimo
		real taxa_juros = 0.03 // SIgnifica 3%
		inteiro contador = 1
		inteiro parcelas_totais = 0

		escreva("Qual o valor do empréstimo: ")
		leia(valor_emprestimo)

		escreva("\nQual a quantidade de parcelas? ")
		leia(parcelas_totais)

		enquanto (contador <= parcelas_totais)
		{
			inteiro numero_parcelas = contador
			real juros_emprestimo = valor_emprestimo * taxa_juros * numero_parcelas
			
			escreva("A taxa de juros no período de " + numero_parcelas + " mes(es) é de R$ " + juros_emprestimo + "0\n")
			contador++

		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 584; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */