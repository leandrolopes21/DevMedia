'use client';
import estilos from "./page.module.css";
import Lupa from "../../public/lupa.png";
import Image from "next/image";
import ItemJogos from "./componentes/ItemJogos";
import { useState } from "react";

import { filtrarJogo, buscarJogo, retornarJogos } from "./servico";

export default function Home() {

  const [listaJogos, setListaJogos] = useState(retornarJogos());
  const [textBusca, setTextoBusca] = useState("");

  const handleFiltrarJogo = (plataforma) => {
    setListaJogos(filtrarJogo(plataforma));
    setTextoBusca("");
  };

  const limpaFiltro = () => {
    setListaJogos(retornarJogos());
    setTextoBusca("");
  };

  const handleBuscarJogo = (textoDigitado) => {
    setTextoBusca(textoDigitado);
    setListaJogos(buscarJogo(textoDigitado));
  };

  return (
    <div className={estilos.container_principal}>
      <h2>Lista de jogos Exclusivos</h2>
      <div className={estilos.container_btns}>
        <button onClick={() => handleFiltrarJogo('xbox')}>XBOX</button>
        <button onClick={() => handleFiltrarJogo('playstation')}>PlayStation</button>
        <button onClick={() => handleFiltrarJogo('nintendo')}>Nintendo</button>
        <button onClick={() => limpaFiltro()}>Limpar Filtro</button>
      </div>
      <div className={estilos.container_input}>
        <Image src={Lupa} alt="icone" />
        <input
          type="text"
          value={textBusca}
          /*
          *** Onchange é um evento que aciona uma função
          *** Sempre que um caractere for digitado no input
          */
          onChange={(event) => handleBuscarJogo(event.target.value)}
          placeholder="Pesquisar Jogo ou plataforma"/>
      </div>
      <div className={estilos.container_cards}>
        {listaJogos.map((jogo, index) => (
          <ItemJogos
            key={index} // No lugar do id
            nome={jogo.nome}
            plataforma={jogo.plataforma}
          />
        ))}
      </div>
    </div>
  );
}
