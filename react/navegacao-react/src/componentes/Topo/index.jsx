import estilos from './Topo.module.css';
import Link from 'next/link';

export default function Topo() {
    return (
        <header className={estilos.container_topo}>
            <h1>Navegação React</h1>
            <nav className={estilos.container_links}>
                <Link className={estilos.link_front} href="/frontend" target='_blank'>Front-End</Link>
                <Link className={estilos.link_back} href="/backend" target='_blank'>Back-End</Link>
                <Link className={estilos.link_mob} href="/mobile" target='_blank'>Mobile</Link>
            </nav>
        </header>
    )
}