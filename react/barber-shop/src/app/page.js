'use client';
import estilos from "./page.module.css";
import { useState } from "react";
import { BsSun, BsMoon } from "react-icons/bs";
import Image from "next/image";
import Logo from "../../public/barbearia.png";

export default function Home() {

  const [alteraTema, setAlteraTema] = useState(false);

  function trocarTemaPagina() {
    setAlteraTema(!alteraTema);
  }

  return (
    <div className={alteraTema ? estilos.dark_mode : estilos.light_mode}>
      <header className={estilos.header_container}>
        <Image className={estilos.img} src={Logo} alt="Logo"/>
        <button onClick={trocarTemaPagina}>{alteraTema ? <BsSun/> : <BsMoon/>}</button>
      </header>

      <main className={estilos.main_container}>
        <section className={estilos.banner}></section>
        <section className={estilos.text}>
          <h1>Bem-vindo a Barber Shop</h1>

          <p className={estilos.text_bold}>
            Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas.
          </p>

          <p>
            Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo. Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.
          </p>

          <span className={estilos.assinatura}>S. Kelly</span>
        </section>
      </main>
    </div>
  );
}
