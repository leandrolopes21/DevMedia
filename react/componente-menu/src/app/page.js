'use client';
import { useState } from "react"; // useState - função de estado
import estilos from "./page.module.css";
import Menu from "@/componentes/Menu";
import { CiMenuBurger } from "react-icons/ci"; // componente <CiMenuBurger/>
import { IoMdClose } from "react-icons/io"; // componente <IoMdClose/>

export default function Home() {

  const [menuAberto, setMenuAberto] = useState(false); // estado começa como falso

  function atualizarMenu() { // função que atualiza o menu
    setMenuAberto(!menuAberto); // aqui a constante menuAberto é alterada para negação, com ela negada ela passa a ter o estado verdadeiro
  };

  return ( // dentro de returno é o código de interface
    <main className={estilos.container}>
      <header className={estilos.topo}>
        <button className={estilos.botao} onClick={atualizarMenu}>
          {menuAberto ? <IoMdClose/> : <CiMenuBurger/>} {/* if ternário - Se menuAberto for verdadeiro, então chame o componente <IoMdClose/> senão chame o componente <CiMenuBurger/> */}
        </button>
      </header>
      {menuAberto && (
        <Menu/>
      )}
    </main>
  );
}
