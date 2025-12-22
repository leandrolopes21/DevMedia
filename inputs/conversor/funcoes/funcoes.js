function converterTemperaturaFahrenheit(temperaturaCelsius) {

    let temperaturaFahrenheit = (temperaturaCelsius * 1.8) + 32;

    return temperaturaFahrenheit;
}

function statusTemperatura(temperaturaCelsius) {

    let clima;

    if (temperaturaCelsius > 40) {
        clima = 'Com calor de deserto!';
    } else if (temperaturaCelsius >= 30) {
        clima = 'Muito quente!';
    } else if (temperaturaCelsius >= 20 && temperaturaCelsius < 30) {
        clima = 'Ameno!';
    } else if (temperaturaCelsius > 0 && temperaturaCelsius < 20) {
        clima = 'Frio!';
    } else if (temperaturaCelsius <= 0) {
        clima = 'Congelante!';
    } else {
        clima = 'Estranho!';
    }

    return clima;
}

export {converterTemperaturaFahrenheit, statusTemperatura};