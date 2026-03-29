function retornaSerieDisney(serie) {
    return (serie.servico == 'Disney+');
}

function retornaSerieHBO(serie) {
    return (serie.servico == 'HBO');
}

export {retornaSerieDisney, retornaSerieHBO};