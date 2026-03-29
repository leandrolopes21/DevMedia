import Image from "next/image";
import Logo from '../../../public/vercel.svg';
import estilos from './Topo.module.css';

export default function Topo() {
    return (
        <div className={estilos.topo_container}>
            <Image className={estilos.img_logo} src={Logo} alt="Vercel Logo"/>
            <h1>Topo</h1>
        </div>
    );
}