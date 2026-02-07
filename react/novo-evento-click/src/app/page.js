'use client';
import { useState } from "react";
import estilos from "./page.module.css";

export default function Home() {

  // Variáveis para armazenar as classes CSS
  const corDeFundoVermelho = estilos.bg_vermelho;
  const corDeFundoAzul = estilos.bg_azul;
  
  const [corDeFundo, setcorDeFundo] = useState(false);

  function alteraCor() {
    setcorDeFundo(!corDeFundo);
  }

  return (
    <main className={estilos.page}>
      
      <div className={estilos.container}>
        <h1>Aletrando estilo do elemento</h1>
        <div className={corDeFundo ? corDeFundoAzul : corDeFundoVermelho}></div>
        
        <p>Clique no botão para alterar sua cor</p>
        <button onClick={alteraCor}>Alterar</button>
      </div>

    </main>
  );
}
