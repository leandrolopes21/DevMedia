'use client';
import Image from "next/image";
import Banner from "../../public/banner.png";
import estilos from "./page.module.css";
import { useState } from "react";
import Categorias from "./componentes/Categorias";
import CampoDeBusca from "./componentes/CampoDeBusca";
import { produtosEntrada, buscarProduto, filtrarProduto } from "./servico";
import Cards from "./componentes/Cards";

export default function Home() {
  
  const [dadosFiltrados, setDadosFiltrados] = useState(produtosEntrada);
  const [textoBuscaDigitado, setTextoBuscaDigitado] = useState("");
  const [botaoClicado, setBotaoClicado] = useState("Entradas");

  const handleBusca = (textoDigitado) => {
    setTextoBuscaDigitado(textoDigitado);
    textoDigitado.length >= 3 && setDadosFiltrados(buscarProduto(textoDigitado));
    setBotaoClicado("");
  };

  const handleFiltro = (categoria) => {
    setTextoBuscaDigitado("");
    setDadosFiltrados(filtrarProduto(categoria));
    setBotaoClicado(categoria);
  };

  return (
    <div>
      <header className={estilos.topo}>
        <Image src={Banner} alt="banner" />
        <div>
          <h1>RESTAURANT</h1>
          <p>
            De pratos clássicos a criações surpreendentes, nosso cardápio é um
            requinte de sabores refinados.
          </p>
        </div>
      </header>
      <main className={estilos.container_principal}>
        <Categorias
          handleFiltro={handleFiltro}
          botaoClicado={botaoClicado}
        />

        <CampoDeBusca
          textoBuscaDigitado={textoBuscaDigitado}
          handleBusca={handleBusca}
        />

        <section className={estilos.secao_cards}>
          <h2>Cardápio</h2>
          <div className={estilos.container_cards}>
            {dadosFiltrados.map((produto) => (
              <Cards key={produto.id} produto={produto} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
