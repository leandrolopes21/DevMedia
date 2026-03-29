import estilos from '@/app/componentes/topo/Topo.module.css';
import Image from 'next/image';
import Logo from './assets/logo.png';
import IconeSol from './assets/sun.png';
import IconeLua from './assets/moon.png';

export default function Topo(props) {
    return (
        <header className={props.estado ? estilos.dark_mode_header : estilos.light_mode_header}>
            <Image className={estilos.img} src={Logo} alt="Logo"/>
            <button onClick={props.clickAlteraEstado} className={props.estado ? estilos.dark_mode_botao : estilos.light_mode_botao}>
                <Image className={estilos.iconesBtn} src={props.estado ? IconeSol : IconeLua} alt="Ícone do tema" />
            </button>
      </header>
    );
}