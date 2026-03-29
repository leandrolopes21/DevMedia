programa
{
	
	funcao inicio()
	{
		inteiro codigo, qtde
		real valor=0
		cadeia item=""
		
		escreva("*** Cardápio ***")
		escreva("100 - Hambúrguer - R$5,50")
		escreva("101 - Cachorro-quente - R$4,50")
		escreva("102 - Milkshake - R$7,00")
		escreva("103 - Pizza brotinho - R$8,00")
		escreva("104 - Cheeseburguer - R$8,50")
		escreva("Informe o código do seu pedido: ")
		leia(codigo)
		escreva("Informe a quantidade: ")
		leia(qtde)
		
		escolha (codigo)
	
		{
			caso 100: item="Hambúrguer", valor=qtde*5.5, pare
			caso 101: item="Cachorro-quente", valor=qtde*4.5, pare
			caso 102: item="Milkshake", valor=qtde*7, pare
			caso 103: item="Pizza brotinho", valor=qtde*8, pare
			caso 104: item="Cheeseburguer", valor=qtde*8.5, pare
			caso contrario escreva("Pedido inválido!")
		}
		escreva(qtde, " x ", item, " = R$", valor, " reais")
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 93; 
 * @PONTOS-DE-PARADA = 24;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */