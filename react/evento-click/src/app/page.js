'use client';

import { useState } from "react";
import estilos from './page.module.css';

export default function Home() {

    const [nome, setNome] = useState('Abrir');
    const [botaoClicado, setbotaoClicado] = useState(false);
    
    function alteraNome() {
        
        if (botaoClicado === true) {
            setbotaoClicado(false);
            setNome('Abrir');
        } else {
            setbotaoClicado(true);
            setNome('Fechar');
        }
    }

    return (
        <main className={estilos.main}>
            <div>
                <button onClick={alteraNome}>{nome}</button>
            </div>
        </main>
    );
}