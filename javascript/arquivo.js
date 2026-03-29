class Usuarios {
    mostrarNome () {
        let nome = document.getElementById("nome").value;
        alert(nome);
    }
}
let usuarios = new Usuarios();
let btn_mensagem = document.getElementById("btn_mensagem");
btn_mensagem.addEventListener('click', usuarios.mostrarNome);