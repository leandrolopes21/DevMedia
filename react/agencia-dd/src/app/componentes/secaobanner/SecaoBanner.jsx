import estilos from '@/app/componentes/secaobanner/SecaoBanner.module.css';

export default function SecaoBanner(props) {
    return (
        <section className={estilos.secao_banner}>
            <div className={props.estado ? estilos.imgBanner_modo_escuro : estilos.imgBanner_modo_claro}></div>
            <div className={estilos.texto}>
                <p>Branding / UI / UX / Tecnologia</p>
                <h2>Agência de Branding</h2>
                <span>e design digital</span>
            </div>
        </section>
    );
}