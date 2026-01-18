import estilos from "./Secao_sobre.module.css";
import Image from "next/image";

import loja from "./assets/loja.png";
import atendimento from "./assets/atendimento.png";

export default function Secao_sobre() {
    return (
      <section className={estilos.secao_sobre} id="secao_sobre">
        <div className={estilos.limitar_secao}>
          <h3>QUEM SOMOS NÓS?</h3>
          <p>Fundada em 2001, em Curitiba - Paraná, a Ótica Vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.</p>

          <div className={estilos.container_cards}>
            <Image className={estilos.imagem_sobre} src={loja} alt="loja"/>

            <div className={estilos.card_texto}>
              <h4>NOSSAS FILIAIS</h4>
              <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
            </div>

            <div className={estilos.card_texto}>
              <h4>ATENDIMENTO FLEXÍVEL</h4>
              <p>Nossa equipe é totalmente treinada para te atender</p>
            </div>

            <Image className={estilos.imagem_sobre} src={atendimento} alt="atendimento"/>
            
          </div>
        </div>
      </section>
    );
}