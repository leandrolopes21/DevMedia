import estilos from "./Secao_produtos.module.css";
import Image from "next/image";

import oculos01 from "../../../public/oculos01.png"
import oculos02 from "../../../public/oculos02.png"
import oculos03 from "../../../public/oculos03.png"
import oculos04 from "../../../public/oculos04.png"

export default function Secao_produtos() {
    return (
      <section className={estilos.secao_produtos} id="secao_produtos">
        <h3>Nossos produtos</h3>

        <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</p>
        <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>

        <div className={estilos.container_produtos_card}>
          <div className={estilos.card}>
            <h4>Óculos de grau</h4>
            {/* <Image className={estilos.img_card} src={oculos01} alt="oculos01"/> */}
            <p>R$ 500,00</p>
          </div>
          <div className={estilos.card}>
            <h4>Óculos transition</h4>
            {/* <Image className={estilos.img_card} src={oculos02} alt="oculos02"/> */}
            <p>R$ 750,00</p>
          </div>
          <div className={estilos.card}>
            <h4>Óculos de sol</h4>
            {/* <Image className={estilos.img_card} src={oculos03} alt="oculos03"/> */}
            <p>R$ 700,00</p>
          </div>
          <div className={estilos.card}>
            <h4>Óculos infantil</h4>
            {/* <Image className={estilos.img_card} src={oculos04} alt="oculos04"/> */}
            <p>R$ 500,00</p>
          </div>
        </div>

        <h3>Todos os nossos produtos incluem:</h3>

        <ul className={estilos.container_lista}>
          <li>Garantia de 1 ano</li>
          <li>Manutenção preventiva</li>
          <li>Descontos especiais na compra da segunda unidade</li>
          <li>Flexibilidade de pagamento</li>
        </ul>
      </section>
    );
}