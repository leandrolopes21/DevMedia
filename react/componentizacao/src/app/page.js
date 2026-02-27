'use client';
import { useState } from "react";
import estilos from "./page.module.css";
import CardAnimal from "@/app/componentes/CardAnimal/CardAnimal";
import CardInformacoes from "@/app/componentes/CardInformacoes/CardInformacoes";
import Topo from "@/app/componentes/Topo/Topo";

export default function Home() {

  const [tipoDoComponenteCard, setTipoDoComponenteCard] = useState("cachorro");

  const alterarState = () => {
    if (tipoDoComponenteCard === "cachorro") {
      setTipoDoComponenteCard("gato");
    } else {
      setTipoDoComponenteCard("cachorro");
    }
  };

  return (
    <div className={estilos.container_principal}>
      
      <Topo clickAlterarAnimal={alterarState} />

      <main>
        <CardAnimal tipoAnimal={tipoDoComponenteCard} />
        <CardInformacoes tipoAnimal={tipoDoComponenteCard} />
      </main>
    </div>
  );
}
