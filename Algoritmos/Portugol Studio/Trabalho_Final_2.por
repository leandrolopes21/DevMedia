//Trabalho final de período - Novembro/2019 - Algoritmos!!!
//Calcular o preço de um automóvel 0km de fábrica!
programa
{
	funcao inicio()
	{
		real trio, ar, dir, completo, valor_fab, IPI
		
		inteiro codigo_op
		
		cadeia continua = "S"
		
		valor_fab = 20000
		IPI = 20000*0.08
		trio = (20000*0.02)+IPI
		ar = 20000*0.02
		dir = 20000*0.02
		completo = (valor_fab+IPI+trio+ar+dir)
		
		faca
		{
			escreva ("Estamos com valores promocionais, vamos montar seu veículo?\n")
			escreva ("Temos 4 tipos de opcionais\n")
			escreva ("1 - Trio elétrico: 2% do valor do veículo com IPI\n")
			escreva ("2 - Ar condicionado: 2% do valor do veículo sem IPI\n")
			escreva ("3 - Direção Hidráulica: 2% do valor do veículo sem IPI\n")
			escreva ("4 - Completo, trio elétrico, ar condicionado e direção hidráulica!\n")
			escreva ("Escolha sua opção: ")
			leia (codigo_op)
			escreva ("Deseja adicionar outro opcional? S / N\n")
			leia (continua)
		
			escolha (codigo_op)
			{
				caso 1:
					trio
				pare
				
				caso 2: 
			 		ar
			 	pare
			 	
			 	caso 3: 
			 		dir
			 	pare
			 	
			 	caso 4: 
			 		completo
			 	pare
			 	
			 	caso contrario: escreva ("Opção Inválida!!")
			 		
			}
		}			 
		enquanto (codigo_op = "S")		
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1236; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */