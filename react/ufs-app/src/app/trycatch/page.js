try {
    const conteudo = 200;
    const arrayConteudo = conteudo.split(" ");

    const palavra1 = arrayConteudo[0];
    const palavra2 = arrayConteudo[1];

    console.log(palavra1);
    console.log(palavra2);
} catch (error) {
    console.log("Erro: " + error.message);
}