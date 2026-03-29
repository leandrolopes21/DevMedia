'use client';
import Image from "next/image";
import Lupa from "../../public/lupa.png";
import estilos from "./page.module.css";
import { useState } from "react";
import { nomes as dados } from "./dados/dados";

export default function Home() {

  const [busca, setBusca] = useState("");
  const [nomes, setNomes] = useState(dados);

  const handleBusca = (textoDigitado) => {
    setBusca(textoDigitado);
    setNomes(dados.filter((nome) => nome.toLowerCase().includes(textoDigitado.toLowerCase())));
  };

  return (
    <div className={estilos.page}>

      <div className={estilos.container}>
            <Image className={estilos.icone} src={Lupa} alt="Imagem Lupa"/>
            <input
                type="text"
                value={busca}
                /*
                *** Onchange é um evento que aciona uma função
                *** Sempre que um caractere for digitado no input
                */
                onChange={(event) => handleBusca(event.target.value)}
                placeholder="Pesquise aqui um nome"
            />
        </div>

      
      {nomes.map((nome, index) => (
        <p key={index}>{nome}</p>
      ))}
    </div>
  );
}
