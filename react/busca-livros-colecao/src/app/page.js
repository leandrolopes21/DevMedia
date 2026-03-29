'use client';
import React, { useState } from "react";
import estilos from "./page.module.css";
import { retornaLivros, buscaLivro } from "./servico";

export default function Home() {

  const [livrosListados, setlivrosListados] = useState(retornaLivros());
  const [textoBusca, setTextoBusca] = useState("");

  const listaLivroBuscado = (textoDigitado) => {
    setTextoBusca(textoDigitado);
    setlivrosListados(buscaLivro(textoDigitado));
  }

  return (
    <div>
      {/* Campo de pesquisa */}
      <div className={estilos.container_input}>
        <input
          type="text"  
          value={textoBusca}
          onChange={(event) => listaLivroBuscado(event.target.value)}
          placeholder="Pesquisar livro por título ou categoria"
        />
      </div>

      {/* Renderizar na tela o resultado */}
      <div className={estilos.page}>
        {livrosListados.map((livro) => (
          <div key={livro.id} className={estilos.card}>
            <h3>{livro.titulo}</h3>
            <p><strong>Autor:</strong> {livro.autor}</p>
            <p><strong>Descrição:</strong> {livro.descricao}</p>
            <p><strong>Categoria:</strong> {livro.categoria}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
