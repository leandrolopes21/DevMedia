import Image from "next/image";
import estilos from "./Cards.module.css";

// Este é um componente de apresentação responsável por renderizar um único card de produto.
export default function Cards({ produto }) {
  return (
    // O container principal do card.
    <div className={estilos.container}>
      {/* A figura contém a imagem do produto. */}
      <figure>
        <Image src={produto.imagem} alt={produto.nome}/>
      </figure>
      {/* Container para as informações textuais do produto. */}
      <div className={estilos.container_informacoes}>
        <div>
          <h3>{produto.nome}</h3>
          <small>{produto.categoria}</small>
          <p>{produto.descricao}</p>
        </div>
        <div>
          {/* Formata o preço do produto para o padrão monetário brasileiro (BRL). */}
          <span>{new Intl.NumberFormat("pt-br", {style: "currency", currency: "BRL"}).format(produto.preco)}</span>
        </div>
      </div>
    </div>
  );
}