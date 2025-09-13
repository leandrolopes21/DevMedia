programa
{
	
	funcao inicio()
	{
		
		// Declaração de variáveis
		cadeia nome
		caracter sexo
		cadeia cpf
		cadeia email
		inteiro ano_nascimento
		inteiro ano_atual = 2025
		inteiro idade
		logico termos

		escreva ("Bem vindo ao sistema de cadastro \n\n")

		// Entrada de dados
		escreva ("Informe seu nome: ")
		leia (nome)

		escreva ("Informe seu sexo: M = Masculino - F = Feminino ")
		leia (sexo)
		
		escreva ("Informe seu CPF: ")
		leia (cpf)
		
		escreva ("Informe seu e-mail: ")
		leia (email)
		
		escreva ("Informe seu ano de nascimento: ")
		leia (ano_nascimento)

		escreva ("Você aceita os termos? \nVerdadeiro = Sim \nFalso = Não \n")
		leia (termos)

		idade = ano_atual - ano_nascimento

		escreva ("\n\nDados de cadastro recebidos! \n\n")

		// Saída dos dados
		escreva ("Seu nome é " + nome + "\n")
		
		se (sexo == 'M') {
			escreva ("Sexo informado: Masculino \n")
		} senao {
			escreva ("Sexo informado: Feminino \n")
		}
		escreva ("Seu CPF é " + cpf + "\n")
		escreva ("Seu email é " + email + "\n")
		escreva ("Você tem " + idade + " anos \n")
		escreva ("Você aceitou os termos? " + termos)
		
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 783; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */