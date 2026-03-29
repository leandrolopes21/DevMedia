programa
{
	/*
	funcao inicio() // Estrutura de repetição *enquanto
	{
		cadeia login = "brad"
		cadeia senha = "1234"
		inteiro contador = 3
		
		escreva("Sistema de validação de usuário!\n\n")

		enquanto(contador > 0)
		{
			escreva("Digite seu login: ")
			leia(login)

			escreva("Digite sua senha: ")
			leia(senha)

			se(login != "brad" ou senha != "1234")
			{
				contador--
				escreva("\nLogin ou senha inválidos!\n\n")
				escreva("Você tem " + contador + " tentativas\n\n")

				se(contador == 0)
				{
					escreva("Usuário bloqueado!!\n")
					pare
				}
			}
			senao
			{
				escreva("\nUsuário validado!!\n")
				pare			
			}
		}
	}
	*/

	funcao inicio() // Estrutura de repetição *faca enquanto
	{
		cadeia login = "brad"
		cadeia senha = "1234"
		inteiro contador = 3

		escreva("Sistema de validação de usuário!\n\n")

		faca
		{
			escreva("Digite seu login: ")
			leia(login)

			escreva("Digite sua senha: ")
			leia(senha)

			se(login != "brad" ou senha != "1234")
			{
				contador--
				escreva("\nLogin ou senha inválidos!\n\n")
				escreva("Você tem " + contador + " tentativas\n\n")

				se(contador == 0)
				{
					escreva("Usuário bloqueado!!\n")
					pare
				}
			}
			senao
			{
				escreva("\nUsuário validado!!\n")
				pare			
			}
		}
		enquanto(contador > 0)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1306; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */