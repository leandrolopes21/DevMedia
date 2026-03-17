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
  // Estado para armazenar os produtos que serão exibidos na tela.
  // Inicia com os produtos da categoria "Entradas".
  const [dadosFiltrados, setDadosFiltrados] = useState(produtosEntrada);

  // Estado para armazenar o texto digitado no campo de busca.
  const [textoBuscaDigitado, setTextoBuscaDigitado] = useState("");

  // Estado para controlar qual botão de categoria está ativo (para estilização).
  const [botaoClicado, setBotaoClicado] = useState("Entradas");

  // Função para lidar com a busca de produtos por texto.
  const handleBusca = (textoDigitado) => {
    // Atualiza o estado com o texto que o usuário está digitando.
    setTextoBuscaDigitado(textoDigitado);
    // Se o texto tiver 3 ou mais caracteres, chama a função de serviço para buscar o produto.
    textoDigitado.length >= 3 && setDadosFiltrados(buscarProduto(textoDigitado));
    // Limpa a seleção do botão de categoria, pois a busca é livre.
    setBotaoClicado("");
  };

  // Função para lidar com o filtro de produtos por categoria.
  const handleFiltro = (categoria) => {
    // Limpa o campo de busca ao selecionar uma categoria.
    setTextoBuscaDigitado("");
    // Chama a função de serviço para filtrar os produtos pela categoria clicada.
    setDadosFiltrados(filtrarProduto(categoria));
    // Atualiza o estado para destacar o botão da categoria selecionada.
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
        {/* Componente que exibe os botões de categoria e recebe a função de filtro e o estado do botão clicado como props. */}
        <Categorias
          handleFiltro={handleFiltro}
          botaoClicado={botaoClicado}
        />

        {/* Componente que exibe o campo de busca e recebe o estado do texto e a função de busca como props. */}
        <CampoDeBusca
          textoBuscaDigitado={textoBuscaDigitado}
          handleBusca={handleBusca}
        />

        <section className={estilos.secao_cards}>
          <h2>Cardápio</h2>
          <div className={estilos.container_cards}>
            {/* Mapeia a lista de produtos filtrados e renderiza um componente Card para cada um. */}
            {dadosFiltrados.map((produto) => (
              <Cards key={produto.id} produto={produto} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
