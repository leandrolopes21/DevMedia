import estilos from './Topo.module.css';
import Link from 'next/link';
import Logo from '../../../public/logo.png';
import Image from 'next/image';

export default function Topo() {
    return (
        <header className={estilos.container_topo}>
            <div>
                <Image className={estilos.img} src={Logo} alt='Logo'/>
                <nav className={estilos.container_links}>
                    <Link className={estilos.link_home} href="/">Home</Link>
                    <Link className={estilos.link_sabores} href="/sabores">Sabores</Link>
                    <Link className={estilos.link_sobre} href="/sobre">Sobre</Link>
                </nav>
            </div>
        </header>
    )
}