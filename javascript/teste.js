let secao = document.getElementById('secao');
let quantidade = document.getElementById('qtde');

let botao = document.getElementById('novo');
botao.addEventListener('click', criar);

function criar() {

    if (quantidade.value == "") {

        alert("Digite um valor válido!")

    } else {

        let contador = 1;
        let numero = Number(quantidade.value);

        while (contador <= numero) {

            let criarDiv = document.createElement('div');
            criarDiv.setAttribute('id', 'dinamica');
            criarDiv.textContent = "Nova Div";
            secao.appendChild(criarDiv);

            contador++;
        }    
    }
}

    