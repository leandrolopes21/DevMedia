    var deslocamento = document.getElementById('distancia');
    var tempo = document.getElementById('tempo');
    var botaoCalcular = document.getElementById('btn');
    var resultado = document.getElementById('resultado');

function verificar() {
    
    if (deslocamento.value.trim() == "" || tempo.value.trim() == "") {
        resultado.innerHTML = "Digite valores válidos!";
    } else {
        var num1 = Number(deslocamento.value);
        var num2 = Number(tempo.value);
        var resultadoCalculo = num1 / num2;
        resultado.innerHTML = `${"Velocidade média = " + resultadoCalculo + "m/s"}`;
    }
    
}