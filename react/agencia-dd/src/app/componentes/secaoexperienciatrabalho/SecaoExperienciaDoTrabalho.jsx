import estilos from '@/app/componentes/secaoexperienciatrabalho/SecaoExperienciaDoTrabalho.module.css';
import Card from '../card/Card';

const experienciasTrabalho = [
    {
        data: "JUNHO 2012 - 2016",
        titulo: "Web Designer",
        empresa: "Pied Piper StartUp.",
        paragrafo: "Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores"
    },
    {
        data: "AGOSTO 2016 - 2019",
        titulo: "Product Designer",
        empresa: "E Corp.",
        paragrafo: "Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra"
    },
    {
        data: "FEVEREIRO 2019 - 2021",
        titulo: "Digital Consulting",
        empresa: "Arasaka Inc.",
        paragrafo: "Consultoria em estratégias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução"
    }
];

export default function SecaoExperienciaDoTrabalho(props) {
    return (
        <section className={props.estado ? estilos.secao_modo_escuro : estilos.secao_modo_claro}>
            <div className={estilos.container_texto}>
                <h2>Experiências de Trabalho</h2>
                <p>
                    Há mais de 10 anos no mercado de Branding, Desing Gráfico, Criação de Sites e Marketing Digital,
                    nos empenhamos diariamente para entregar resultados que tragam impacto aos nossos clientes.
                </p>
            </div>
            <div className={estilos.container_cards}>
                <Card estado={props.estado}
                    data="JUNHO 2012 - 2016"
                    titulo="Web Designer"
                    empresa="Pied Piper StartUp."
                    paragrafo="Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores"/>
                <Card estado={props.estado}
                    data="AGOSTO 2016 - 2019"
                    titulo="Product Designer"
                    empresa="E Corp."
                    paragrafo="Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra"/>
                <Card estado={props.estado}
                    data="FEVEREIRO 2019 - 2021"
                    titulo="Digital Consulting"
                    empresa="Arasaka Inc."
                    paragrafo="Consultoria em estratégias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução"/>
                {experienciasTrabalho.map((exp, index) => (
                    <Card key={index} estado={props.estado} {...exp} />
                ))}
            </div>
        </section>
    );
}