"use client";
import { useState } from "react";
import estilos from "./page.module.css";

export default function Home() {
  const [ano, setAno] = useState("");
  const [fato, setFato] = useState("");

  const buscarFato = async () => {
    if (!ano) return;

    try {
      const response = await fetch(`http://localhost:8080/?ano=${ano}`);
      const data = await response.json();

      if (response.ok) {
        setFato(data.fato);
      } else {
        // Trata o erro 400 que vem do back-end
        setFato(data.Erro || "Erro na requisição.");
      }
    } catch (error) {
      setFato("Erro ao conectar com a API. Certifique-se que o back-end está rodando.");
    }
  };

  return (
    <div className={estilos.page}>
      <div className={estilos.container}>
        <h1>Verificador de fatos históricos</h1>
        <div className={estilos.inputGroup}>
          <label>Digite o ano</label>
          <input 
            type="number" 
            value={ano} 
            onChange={(e) => setAno(e.target.value)}
            placeholder="Ex: 1945"
          />
          <button onClick={buscarFato}>Verificar</button>
        </div>

        {fato && (
          <div className={estilos.resultado}>
            <p>{fato}</p>
          </div>
        )}
      </div>
    </div>
  );
}
