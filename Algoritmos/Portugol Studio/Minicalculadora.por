programa
{
	
	funcao inicio()
	{
		// Declaração de variáveis
		real num1
		real num2
		caracter operacao
		real resultado
		
		escreva("*** Mini Calculadora ***\n\n")

		escreva("Digite o primeiro número: ")
		leia(num1)

		escreva("Digite o segundo número: ")
		leia(num2)

		escreva("\nEscolha a operação que deseja efetuar: \n\n")
		escreva("+ - Soma\n")
		escreva("- - Subtração\n")
		escreva("* - Multiplicação\n")
		escreva("/ - Divisão\n\n")
		escreva("Digite: ")
		leia(operacao)
		escreva("\nVocê escolheu a operação: " + operacao + "\n")

		// Estrutura condicional se senao
		se (operacao == '+') {
			resultado = num1 + num2
			escreva("\nResultado da soma: " + num1 + " " + operacao + " " + num2 + " = " + resultado + "\n")
		} senao se (operacao == '-') {
			resultado = num1 - num2
			escreva("\nResultado da subtração: " + num1 + " " + operacao + " " + num2 + " = " + resultado + "\n")
		} senao se (operacao == '*') {
			resultado = num1 * num2
			escreva("\nResultado da multiplicação: " + num1 + " " + operacao + " " + num2 + " = " + resultado + "\n")
		} senao {
			resultado = num1 / num2
			escreva("\nResultado da divisão: " + num1 + " " + operacao + " " + num2 + " = " + resultado + "\n")
		}

		escreva("\nPerfect!!\n")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 585; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */