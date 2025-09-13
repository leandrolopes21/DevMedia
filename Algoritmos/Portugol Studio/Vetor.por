// Estrutura vetor para armazenamento de nomes

programa
{
	
	funcao inicio()
	{
		inteiro indice // Varável que armazena a posição do vetor a ser acessado
		cadeia nomes[5] // Variável que armazena os elementos informados

		para (indice=0; indice<=4; indice++) // Estrutura de repetição para, indice recebe zero; indice é menor ou igual a 4; indice tem incremento de 1 unidade
		{
			escreva("Informe o nome do " , indice+1, "º aluno: ") // indice+1 refere-se à posição do nome aramazenado na variável nomes
			leia(nomes[indice]) // nomes[indice] armazena os nomes informados pelo usuário
		}
		para (indice=0; indice<=4; indice++) // Estrutura para, indice recebe zero; indice é menor ou igual a 4; indice tem incremento de 1 unidade (laço de repetição para exibição de todos o nomes informados)
		{
			escreva(indice+1, "º aluno: ", nomes[indice], "\n") // indice+1 apresenta o resultado dos nomes informados pelo usuário
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 798; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */