class Cliente {
    pegaNome() {
        let nome = document.getElementById('nome').value;
        alert(nome);
    }
}

let cliente = new Cliente();
let botao = document.getElementById('botaoEnvio');
botao.addEventListener('click', cliente.pegaNome);

