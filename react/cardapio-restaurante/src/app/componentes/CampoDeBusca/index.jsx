import Image from "next/image";
import Lupa from "../../../../public/lupa.png";
import estilos from "./CampoDeBusca.module.css";

export default function CampoDeBusca({ textoBuscaDigitado, handleBusca }) {
    return (
        <div className={estilos.container}>
            <Image className={estilos.icone} src={Lupa} alt="Imagem Lupa"/>
            <input
                type="text"
                value={textoBuscaDigitado}
                /*
                *** Onchange é um evento que aciona uma função
                *** Sempre que um caractere for digitado no input
                */
                onChange={(event) => handleBusca(event.target.value)}
                placeholder="Pesquise aqui um dos pratos do nosso cardápio"
            />
        </div>
    );
}