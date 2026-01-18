import estilos from "./Secao_contatos.module.css";

export default function Secao_contatos() {
    return (
      <section className={estilos.secao_contatos} id="secao_contatos">
        <h3>Fale conosco</h3>

        <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>

        <div className={estilos.contatos_card}>
          <h3>Nossos contatos</h3>
          <span>Curitiba, PR</span>
          <span>(41) 99999-8888</span>
          <span>contato@oticavida.com.br</span>
        </div>

        <div className={estilos.contatos_card}>
          <h3>Nossas Redes Sociais</h3>
          <span></span>
          <span></span>
          <span></span>
        </div>        
      </section>
    );
}