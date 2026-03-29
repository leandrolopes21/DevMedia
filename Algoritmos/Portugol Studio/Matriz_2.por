programa
{
	
	funcao inicio()
	{
		inteiro lin, col, M1[4][4], M2[4][4]
		para (lin=0; lin<=3; lin++)
		{
			para (col=0; col<=3; col++)
			{
				escreva("Informe a posição [",lin+1, ",", col+1, "]: ")
				leia(M1[lin][col])
				M2[col][lin]=M1[lin][col]
			}
		}
		escreva("*** Veja a nova Matriz! ***\n")
		para (lin=0; lin<=3; lin++)
		{
			para (col=0; col<=3; col++)
			{
				escreva(M2[lin][col]," ")
			}
			escreva("\n")
		}
		 
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 52; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */