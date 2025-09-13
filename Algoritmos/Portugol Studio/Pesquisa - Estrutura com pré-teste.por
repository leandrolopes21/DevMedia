programa
{
	
	funcao inicio()
	{
		real peso,media_idade, media_peso 
		inteiro entrevistados, soma_idade, soma_peso, idade
		entrevistados=0
		soma_peso=0
		soma_idade=0

		escreva("Informe sua idade: ")
		leia(idade)
		escreva("Informe seu peso: ")
		leia(peso)
		
	enquanto (idade!=0 e peso!=0)
		{
			escreva("Informe sua idade: ")
			leia(idade)
			escreva("Informe seu peso: ")
			leia(peso)
			entrevistados++
			soma_peso+=peso
			soma_idade+=idade
		}
	media_peso=soma_peso/entrevistados
	media_idade=soma_idade/entrevistados
	escreva("Foram entrevistadas ", entrevistados, " pessoas\n")
	escreva("A média das idades é: ", media_idade," anos\n")
	escreva("A média de pesos é: ", media_peso, " Kg\n")
}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 459; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */