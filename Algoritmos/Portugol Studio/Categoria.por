programa
{
	
	funcao inicio()
	{
		real idade

		escreva("Informe sua idade: ")
		leia(idade)

		se (idade>=7 e idade<=12)
		{
			escreva("Categoria Infantil")
		}
		senao se (idade>= 13 e idade<=17)
		{
			escreva("Categoria Juvenil")
		}
		senao se (idade>=18 e idade<=49)
		{
			escreva("Categoria Adulto")
		}
		senao se (idade>=50)
		{
			escreva("Categoria Senior")
		}
		senao
		{
			escreva("Idade invalida!")
		}
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 417; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */