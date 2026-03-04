'use client';
import { useState } from "react";
import estilos from "./page.module.css";
import Topo from "./componentes/topo/Topo";
import SecaoBanner from "./componentes/secaobanner/SecaoBanner";
import SecaoExperienciaDoTrabalho from "./componentes/secaoexperienciatrabalho/SecaoExperienciaDoTrabalho";
import Rodape from "./componentes/rodape/Rodape";

export default function Home() {

  const [estado, setEstado] = useState(false);

    function alterarTema() {
      setEstado(!estado);
    }

  return (
    <div className={estilos.page}>
      <Topo clickAlteraEstado={alterarTema} estado={estado}/>

      <main>
        <SecaoBanner estado={estado}/>
        <SecaoExperienciaDoTrabalho estado={estado}/>
      </main>
      <Rodape estado={estado}/>
    </div>
  );
}
