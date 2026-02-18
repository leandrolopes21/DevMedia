import estilos from "./page.module.css";
import CardProduto from "@/componentes/CardProduto";

import ImgProduto1 from "../../public/hamburguer.jpg";
import ImgProduto2 from "../../public/coca.jpg";
import ImgProduto3 from "../../public/sorvete.jpg";

export default function Home() {
  return (
    <div className={estilos.principal}>
      <CardProduto
        imagem={ImgProduto1}
        nome={"Hamburguer"}
        preco={18}
        categoria={"Lanche"}/>
      <CardProduto
        imagem={ImgProduto2}
        nome={"Coca-Cola"}
        preco={7}
        categoria={"Bebida"}/>
      <CardProduto
        imagem={ImgProduto3}
        nome={"Sorvete"}
        preco={12}
        categoria={"Sobremesa"}/>
    </div>
  );
}
