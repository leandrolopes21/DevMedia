programa
{
	
	funcao inicio()
	{
		inteiro codigo, qtde
		real valor=0
		cadeia continua ="S"
		
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

		enquanto (continua=="S")
		{
			escolha (codigo)
			{
				caso 100: valor=qtde*5.5, pare
				caso 101: valor=qtde*4.5, pare
				caso 102: valor=qtde*7, pare
				caso 103: valor=qtde*8, pare
				caso 104: valor=qtde*8.5, pare
				caso contrario escreva("Pedido inválido!")
			}
			escreva("Deseja adicionar outro item? S / N: ")
			leia(continua)

			se (continua=="S")
			{
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
			}
		}
		escreva("Valor total a pagar R$ ", valor)
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1185; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */