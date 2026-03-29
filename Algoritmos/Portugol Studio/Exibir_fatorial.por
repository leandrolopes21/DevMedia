// Programa para exibir o fatorial de um número informado pelo usuário!!

programa
{
	
	funcao inicio()
	{
		inteiro cont, num, fatorial=1 // Declarar variáveis, fatorial já recebe 1

		escreva ("Informe o número a ser calculado: ")
		leia (num)

		para (cont=1; cont<=num; cont++) // Para cont que recebe 1; cont menor ou igual "num"; e cont com incremento de 1 unidade
		{
			fatorial*=cont	// Aqui calcula-se o fatorial		
		}
		escreva ("Fatorial de ", num, " é: ", fatorial)
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 261; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */