programa
{
	
	funcao inicio()
	{
		inteiro idade

		escreva("Informe sua idade: ")
		leia(idade)

		faca
		{
			se (idade>=7 e idade<=12)
			{
				escreva("Sua categoria é INFANTIL!\n")	
			}
			senao se (idade>=13 e idade<=17)
			{
				escreva("Sua categoria é JUVENIL!\n")
			}
			senao se (idade>=18 e idade<=49)
			{
				escreva("Sua categoria é ADULTO!\n")
			}
			senao se (idade>=50)
			{
				escreva("Sua categoria é SENIOR!\n")
			}
			senao
			{
				escreva("Competidor fora da faixa etária permitida!\n")
			}
			escreva("Informe sua idade: ")
			leia(idade)
		}
		enquanto (idade!=-1)		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 520; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */