import Image from "next/image";
import estilos from "@/componentes/card.module.css";
import { FaFire, FaWater } from "react-icons/fa";
import { PiPlant } from "react-icons/pi";
import { MdAir } from "react-icons/md";

export default function Card(props) {
    return (
        <div className={
            props.elemento === "agua"
            ? estilos.card_signo_agua
            : props.elemento === "fogo"
            ? estilos.card_signo_fogo
            : props.elemento === "terra"
            ? estilos.card_signo_terra
            : props.elemento === "ar" && estilos.card_signo_ar
        }>
            <div className={estilos.titulo_icone}>
                <h3 className={estilos.nomeSigno}>{props.signo}</h3>
                {
                    props.elemento === "agua" ? (
                        <FaWater className={estilos.icone}/>
                    ) : props.elemento === "fogo" ? (
                        <FaFire className={estilos.icone}/>
                    ) : props.elemento === "terra" ? (
                        <PiPlant className={estilos.icone}/>
                    ) : props.elemento === "ar" && (
                        <MdAir className={estilos.icone}/>
                    )
                }
            </div>
            <Image className={estilos.imagemSigno} src={props.imagem} alt={props.signo} />
            <span className={estilos.periodoNascimento}>{props.dataInicio} - {props.dataFim}</span>
        </div>
    )
}
