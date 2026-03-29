let valor = 500;
let valor_parcelado = 4;

for (let contador = 1; contador <= valor_parcelado; contador++) {
    let resultado = valor / contador;
    console.log("Parcelado em " + contador + "x = " + resultado.toFixed(2));
}