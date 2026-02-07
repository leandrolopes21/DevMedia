'use client';
import { useState } from "react";
import estilos from "./page.module.css";

export default function Home() {
  const [numeroAleatorio, setNumeroAleatorio] = useState(0);

  function gerarNumeroAleatorio() {
    const novoNumero = Math.floor(Math.random() * (100 - 1) + 1);
    setNumeroAleatorio(novoNumero);
  };

  return (
    <main className={estilos.main}>
      <div className={estilos.container}>
        <h1>Número Aleatório</h1>
        <h2>{numeroAleatorio}</h2>
        <p>Clique no botão para gerar um número aleatório</p>
        <button onClick={gerarNumeroAleatorio}>Gerar Número</button>
      </div>
    </main>
  );
}
