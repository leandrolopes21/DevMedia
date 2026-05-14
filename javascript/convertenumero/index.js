const transformaNumerosDigitados = (numerosDigitados) => {
    // Correção 1: Usamos String(valor) para converter
    let numerosConvertidosParaString = String(numerosDigitados);

    if (numerosConvertidosParaString.length <= 4) {
        return numerosConvertidosParaString;
    } else {
        // Correção 2: Usamos .repeat() para criar a sequência de asteriscos
        let transformaNumeros = '*'.repeat(numerosConvertidosParaString.length - 4) + numerosConvertidosParaString.slice(-4);
        return transformaNumeros;
    }
}

console.log(transformaNumerosDigitados(2, 3, 7, 8, 22));