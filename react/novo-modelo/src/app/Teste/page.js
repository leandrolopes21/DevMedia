'use client';
import { useState } from "react";
import Link from "next/link";
import estilos from "../page.module.css";
import Botao from "../componentes/Botao";

export default function Teste() {
    const [contagem, setContagem] = useState(0);

    function handleContar() {
        setContagem(contagem + 1);
    }

    function handleZerar() {
        setContagem(0);
    }

    return (
        <div className={estilos.page}>
            <main className={estilos.main}>
                <h1>Página Teste</h1>
                <p>Esta é a página para testes de nosso projeto.</p>

                <div>
                    <Botao onClick={handleContar}/>
                </div>

                <div>
                    <Botao onClick={handleZerar}/>
                </div>

                <div className={estilos.resultado}>{`O botão foi clicado ${contagem} vezes.`}</div>
        
                <div className={estilos.ctas}>
                    <Link href="/" className={estilos.secondary}>Voltar para Home</Link>
                </div>
            </main>
        </div>
    )
}