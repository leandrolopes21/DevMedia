function validarLetraDigitada(letraDigitada) {
    if(letraDigitada.length === 1 && letraDigitada.match(/[a-z]/)) {
        return true;
    } else {
        return false;
    }
}