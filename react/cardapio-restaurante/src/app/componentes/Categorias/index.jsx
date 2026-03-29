import Image from "next/image";
import ImagemEntrada from "../../../../public/entrada.png";
import ImagemMassa from "../../../../public/massa.png";
import ImagemCarne from "../../../../public/carne.png";
import ImagemBebidas from "../../../../public/bebidas.png";
import ImagemSalada from "../../../../public/salada.png";
import ImagemSobremesa from "../../../../public/sobremesa.png";
import estilos from "./Categorias.module.css";

// Componente responsável por renderizar os botões de filtro por categoria.
// Recebe 'handleFiltro' para disparar a filtragem no componente pai e 'botaClicado' para indicar visualmente qual botão está ativo.
export default function Categorias({ handleFiltro, botaClicado }) {
  return (
    <section className={estilos.secao_categorias}>
      <div className={estilos.container_botoes}>
        {/* Botão para filtrar a categoria 'Entradas'. O estilo muda dinamicamente com base na prop 'botaClicado'. */}
        <button className={botaClicado === "Entradas" ? estilos.acenderBtn : estilos.apagarBtn} onClick={() => handleFiltro("Entradas")}>
          <Image className={estilos.icone} src={ImagemEntrada} alt="Imagem botão" />
          <span>Entradas</span>
        </button>
        {/* Botão para filtrar a categoria 'Massas' */}
        <button className={botaClicado === "Massas" ? estilos.acenderBtn : estilos.apagarBtn} onClick={() => handleFiltro("Massas")}>
          <Image className={estilos.icone} src={ImagemMassa} alt="Imagem botão" />
          <span>Massas</span>
        </button>
        {/* Botão para filtrar a categoria 'Carnes' */}
        <button className={botaClicado === "Carnes" ? estilos.acenderBtn : estilos.apagarBtn} onClick={() => handleFiltro("Carnes")}>
          <Image className={estilos.icone} src={ImagemCarne} alt="Imagem botão" />
          <span>Carnes</span>
        </button>
        {/* Botão para filtrar a categoria 'Bebidas' */}
        <button className={botaClicado === "Bebidas" ? estilos.acenderBtn : estilos.apagarBtn} onClick={() => handleFiltro("Bebidas")}>
          <Image className={estilos.icone} src={ImagemBebidas} alt="Imagem botão" />
          <span>Bebidas</span>
        </button>
        {/* Botão para filtrar a categoria 'Saladas' */}
        <button className={botaClicado === "Saladas" ? estilos.acenderBtn : estilos.apagarBtn} onClick={() => handleFiltro("Saladas")}>
          <Image className={estilos.icone} src={ImagemSalada} alt="Imagem botão" />
          <span>Saladas</span>
        </button>
        {/* Botão para filtrar a categoria 'Sobremesas' */}
        <button className={botaClicado === "Sobremesas" ? estilos.acenderBtn : estilos.apagarBtn} onClick={() => handleFiltro("Sobremesas")}>
          <Image className={estilos.icone} src={ImagemSobremesa} alt="Imagem botão" />
          <span>Sobremesas</span>
        </button>
      </div>
    </section>
  );
}