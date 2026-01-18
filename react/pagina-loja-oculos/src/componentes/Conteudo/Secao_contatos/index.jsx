import estilos from "./Secao_contato.module.css";
import Image from "next/image";

import local from "./assets/local.png";
import telefone from "./assets/telefone.png";
import email from "./assets/email.png";
import fb from "./assets/fb.png";
import ig from "./assets/ig.png";
import tt from "./assets/tt.png";

export default function Secao_contatos() {
    return (
      <section className={estilos.secao_contato} id="secao_contato">
        <div className={estilos.limitar_secao}>
          <h3>Fale conosco</h3>
          <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>

          <div className={estilos.contato_container}>
            <div className={estilos.contato_conteudo}>
              <h3>Nossos contatos</h3>

              <div>
                <Image className={estilos.logo_links} src={local}/>
                <span>Curitiba, PR</span>
              </div>
              <div>
                <Image className={estilos.logo_links} src={telefone}/>
                <span>(41) 99999-8888</span>
              </div>
              <div>
                <Image className={estilos.logo_links} src={email}/>
                <span>contato@oticavida.com.br</span>
              </div>
          
            </div>

            <div className={estilos.contato_conteudo}>
              <h3>Nossas Redes Sociais</h3>
              
              <div>
                <Image className={estilos.logo_links} src={fb}/>
                <span>/OticaVida</span>
              </div>
              <div>
                <Image className={estilos.logo_links} src={ig}/>
                <span>@OticaVida</span>
              </div>
              <div>
                <Image className={estilos.logo_links} src={tt}/>
                <span>@OticaVida</span>
              </div>
              
            </div>
          </div>
        </div>   
      </section>
    );
}