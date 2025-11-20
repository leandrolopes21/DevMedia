let secao = document.getElementById('secao');
let quantidade = document.getElementById('qtde');

let botao = document.getElementById('novo');
botao.addEventListener('click', criar);

function criar() {

    if (quantidade.value == "") {

        alert("Digite um valor válido!")

    } else {

        // Limpa a seção antes de criar novas divs
        secao.innerHTML = "";

        let contador = 1;
        let numero = Number(quantidade.value);

        while (contador <= numero) {

            let criarDiv = document.createElement('div');
            // É uma boa prática usar 'class' em vez de 'id' para múltiplos elementos.
            criarDiv.className = 'dinamica'; 
            // Altera a numeração para uma exponencial de base 2.
            // Usamos BigInt (2n) para lidar com números muito grandes.
            criarDiv.textContent = (2n ** BigInt(contador - 1)).toString();
            secao.appendChild(criarDiv);

            // Lógica para o tabuleiro de xadrez (considerando um grid 8x8)
            if (numero == 64) {
                const linha = Math.floor((contador - 1) / 8);
                const coluna = (contador - 1) % 8;

                if ((linha + coluna) % 2 === 0) {
                    criarDiv.style.backgroundColor = "#FFF"; // Casa branca
                } else {
                    criarDiv.style.backgroundColor = "#000"; // Casa preta
                    criarDiv.style.color = "#FFF"; // Texto branco para contraste
                }
            }

            contador++;
        }    
    }
}

    