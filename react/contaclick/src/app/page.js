'use client';
import { useState, useEffect } from "react";
import estilos from "./page.module.css";

export default function Home() {

  const [contador, setContador] = useState(0);
  const incrementar = () => {setContador(contador + 1)};
  const decrementar = () => {contador > 0 && setContador(contador - 1)};

  return (
    <main className={estilos.container_principal}>
      <h1>Contador de Cliques na Página</h1>
      <div>
        <button onClick={incrementar}>Incrementar</button>
        {contador > 0 && <button onClick={decrementar}>Decrementar</button>}
      </div>      
      <p>{contador}</p>
    </main>
  );
}