function validarCompra(cotacao) {

    let statusInvest;
    
    if (cotacao < 50) {
        statusInvest = '** Compra! **'.toUpperCase();
    } else {
        statusInvest = '** Não compra **!'.toUpperCase();
    }

    return statusInvest;
}

export default validarCompra;