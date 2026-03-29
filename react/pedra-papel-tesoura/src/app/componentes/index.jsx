import { useState } from "react";

const PedraPapelTesoura = () => {
    const [jogadaJogador, setJogadaJogador] = useState(null);
    const [jogadaComputador, setJogadaComputador] = useState(null);
    const [resultado, setResultado] = useState(null);

    const opcoesDeJogadas = ["pedra", "papel", "tesoura"];

    const handleJogo = (jogador) => {
        // BUGFIX: Math.random é uma função e precisamos de um número inteiro para o índice.
        const computador = opcoesDeJogadas[Math.floor(Math.random() * opcoesDeJogadas.length)];
        setJogadaJogador(jogador);
        setJogadaComputador(computador);

        if (jogador === computador) {
            setResultado("Empate!");
        } else if (
            (jogador === "pedra" && computador === "tesoura") ||
            (jogador === "papel" && computador === "pedra") ||
            (jogador === "tesoura" && computador === "papel")
        ) {
            setResultado("Você venceu!");
        } else {
            setResultado("Você perdeu!");
        }
    }

    // Função para definir a cor do resultado dinamicamente
    const getResultColor = () => {
        if (resultado === "Você venceu!") return "#28a745"; // Verde
        if (resultado === "Você perdeu!") return "#dc3545"; // Vermelho
        return "#6c757d"; // Cinza
    };

    return (
        <div className="container">
            <h1>Pedra, Papel e Tesoura</h1>
            <h3>Faça sua jogada:</h3>
            <div className="botoes">
                <button onClick={() => handleJogo("pedra")}>✊ Pedra</button>
                <button onClick={() => handleJogo("papel")}>✋ Papel</button>
                <button onClick={() => handleJogo("tesoura")}>✌️ Tesoura</button>
            </div>
            {resultado && <div className="resultado">
                <p>Sua jogada: <strong>{jogadaJogador}</strong></p>
                <p>Jogada do computador: <strong>{jogadaComputador}</strong></p>
                <h2 className="resultado-texto">{resultado}</h2>
            </div>}

            <style jsx>{`
                .container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                    background-color: #f4f4f9;
                    min-height: 100vh;
                    padding: 2rem;
                    text-align: center;
                    color: #333;
                }

                h1 {
                    color: #1a1a1a;
                    margin-bottom: 0.5rem;
                }

                h3 {
                    color: #555;
                    margin-bottom: 2rem;
                    font-weight: 400;
                }

                .botoes {
                    display: flex;
                    gap: 1rem;
                    margin-bottom: 2rem;
                }

                button {
                    padding: 1rem 2rem;
                    font-size: 1.2rem;
                    border: 2px solid #333;
                    border-radius: 10px;
                    background-color: white;
                    cursor: pointer;
                    transition: all 0.2s ease-in-out;
                }

                button:hover {
                    background-color: #333;
                    color: white;
                    transform: translateY(-3px);
                    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
                }

                .resultado {
                    margin-top: 1rem;
                    padding: 1.5rem;
                    border: 1px solid #ddd;
                    border-radius: 10px;
                    background-color: #fff;
                    width: 100%;
                    max-width: 350px;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
                }

                .resultado p {
                    margin: 0.5rem 0;
                    font-size: 1.1rem;
                    text-transform: capitalize;
                }

                .resultado-texto {
                    margin-top: 1rem;
                    font-size: 2.2rem;
                    font-weight: bold;
                    color: ${getResultColor()};
                }
            `}</style>
        </div>
    )
};

export default PedraPapelTesoura;