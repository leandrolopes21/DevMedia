programa
{
	
	funcao inicio()
	{

		inteiro cont, num, qtdeM3=0

		para(cont=1;cont<=10;cont++)
		{
			escreva ("Informe o ", cont, "o. número:")
			leia (num)
			se (num%3==0)
			{
				qtdeM3+=1
			}
		}
		escreva ("Foram informados ", qtdeM3, " múltiplos de 3.")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 234; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */