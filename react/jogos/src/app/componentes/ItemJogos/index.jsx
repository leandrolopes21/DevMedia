import estilos from './ItemJogos.module.css';
import Image from 'next/image';
import XboxLogo from '../../../../public/xbox-logo.png';
import PlaystationLogo from '../../../../public/playstation-logo.jpg';
import NintendoLogo from '../../../../public/nintendo-logo.jpg';

export default function ItemJogos({nome, plataforma}) {
    return (
        <div className={estilos.card}>
            <figure>
                <Image
                    src={
                        plataforma === 'xbox'
                        ? XboxLogo
                        : plataforma === 'playstation'
                        ? PlaystationLogo
                        : NintendoLogo
                    }
                    alt='Logo'
                />
            </figure>
            <div className={estilos.container_cards}>
                <p>{nome}</p>
            </div>
        </div>
    );
}