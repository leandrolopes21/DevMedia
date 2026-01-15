import estilos from "./Secao_capa.module.css";

export default function Secao_capa() {
    return (
        <section className={estilos.secao_capa}>
          <div className={estilos.container_texto}>
            <p>Preços baixos em</p>
            <h1>ÓCULOS DE GRAU E DE SOL</h1>
            <p>Você só encontra aqui</p>
          </div>
        </section>
    );
}