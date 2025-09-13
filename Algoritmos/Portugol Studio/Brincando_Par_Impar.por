/* Um casal de amigos está brincando de par ou ímpar.
A cada uma das 10 jogadas que farão, armazene em um vetor o número escolhido pelo jogador A (que escolheu par),
e em um segundo vetor, o número escolhido pelo jogador B (que escolheu ímpar).
Também a cada jogada, informe o jogador vencedor. Ao final, informe quantas vezes cada jogador venceu.*/

programa
{
	
	funcao inicio()
	{
		inteiro ind, total=0, jogadasA[10], jogadasB[10], venceuA=0, venceuB=0
		para (ind=0; ind<=9; ind++)
		{
			escreva("*** ", ind+1, "a. JOGADA ***\n")
			escreva("Número escolhido pelo jogador A: ")
			leia(jogadasA[ind])
			escreva("Número escolhido pelo jogador B: ")
			leia(jogadasB[ind])
			total=jogadasA[ind]+jogadasB[ind]
			se (total%2==0)
			{
				escreva("Jogador A venceu!\n")
				venceuA++
			}
			senao
			{
				escreva("Jogador B venceu!\n")
				venceuB++
			}
			total=0
		}
		escreva("O jogador A ganhou ", venceuA, " vezes.\n")
		escreva("O jogador B ganhou ", venceuB, " vezes.\n")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 349; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */