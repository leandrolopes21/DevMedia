function classificacaoIMC(imc) {

    let classe;
    let grau;

    // Verifica a faixa do IMC para determinar a classe e o grau
    if (imc < 18.5) {
        classe = 'Magreza';
        grau = 0;
    } else if (imc >= 18.5 && imc <= 24.9) {
        classe = 'Normal';
        grau = 0;
    } else if (imc >= 25 && imc <= 29.9) {
        classe = 'Sobrepeso';
        grau = 1;
    } else if (imc >= 30 && imc <= 39.9) {
        classe = 'Obesidade';
        grau = 2;
    } else if (imc >= 40) {
        classe = 'Obesidade Grave';
        grau = 3;
    } else {
        classe = 'Indefinido';
        grau = 'Indefinido';
    }

    let respostaIMC = `Classificação: ${classe} -- Grau de obesidade: ${grau}`;

    return respostaIMC;
}

export default classificacaoIMC;