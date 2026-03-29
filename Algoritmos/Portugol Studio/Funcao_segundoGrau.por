programa
{
	inclua biblioteca Matematica --> mat
	
	funcao inicio()
	{
		inteiro a, b, c, x, y, raizDelta, delta=0
		real raiz1, raiz2, Xv, Yv
		

		escreva("A Equação do Segundo Grau, é definida pela fórmula (y=ax²+bx+c). Vamos precisar informar valores para este cálculo. Vamos calcular?\n")
		escreva("Informe o valor de * a *: ")
		leia(a)
		escreva("Informe o valor de * b *: ")
		leia(b)
		escreva("Informe o valor de * c *: ")
		leia(c)
		escreva("Informe o valor de * x *: ")
		leia(x)

		y = ((a*(x*x))+(b*x)+c)
		delta = ((b*b)-(4*a*c))
		

		escreva("Valor de y - (f(x)): ", y, "\n")
		escreva("Valor do Delta: ", delta, "\n")
		escreva("Agora que encontramos o valor de * y *, e o valor do Delta, que tal encontrarmos suas raízes?\n")
		escreva("As raízes da função, tem seu valores definidos pela fórmula (x=(-b±√(Delta))/2a)\n")
		
		raizDelta = mat.raiz(delta,2)
		
		raiz1 = (-b+raizDelta)/(2*a)
		
		raiz2 = (-b-raizDelta)/(2*a)

		escreva("Raiz X1: ", mat.arredondar(raiz1,5), "\n")
		escreva("Raiz X2: ", mat.arredondar(raiz2,5), "\n")
		escreva("Muito bem dona Marize, está ficando boa em matemática!! :):):)\n")
		escreva("Sendo assim, agora ache pra mim os vértices da parábola!\n")
		escreva("Os vértices são os pontos X e Y onde a parábola muda de sentido, e são definidos pelas fórmulas abaixo:\n")
		escreva("Vértice em X(Xv) = -b/2*a\t")
		escreva("Vértice em Y(Yv) = -Delta/4*a\n")

		Xv = (-b)/(2*a)
		Yv = (-delta)/(4*a)

		escreva("Vértice X ", Xv, "\n")
		escreva("Vértice Y ", Yv, "\n")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 848; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */