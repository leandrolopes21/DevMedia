import estilos from "@/componentes/CardProduto.module.css";
import Image from "next/image";

export default function CardProduto(props) {
    return (
        <div>
            <div className={estilos.card}>
                <Image className={estilos.img} src={props.imagem} alt={props.nome}/>
                <h3>{props.nome}</h3>
                <p>R$ {props.preco}</p>
                <small>{props.categoria}</small>
                <button>Adicionar</button>
            </div>
        </div>
    );
}