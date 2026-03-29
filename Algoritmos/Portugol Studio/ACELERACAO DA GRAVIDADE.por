programa
{
	inclua biblioteca Matematica --> mat
	funcao inicio()
	{
		const real ag = 9.8
		real seg, vel, conversao
		
		
		escreva("O objeto tocou o solo em quantos segundos? ")
		leia(seg)
		vel = seg*ag
		escreva("Podemos dizer que sua velocidade foi ",mat.arredondar(vel,1), " m/s2")
		conversao = vel/3.6
		escreva("\nOu ", mat.arredondar(conversao,1), " Km/h")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 126; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */