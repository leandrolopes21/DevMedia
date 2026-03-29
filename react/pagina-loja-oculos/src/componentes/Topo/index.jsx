import Image from "next/image";
import Logo from "../../../public/logo.png";
import estilos from "./Topo.module.css";
import Link from "next/link";

export default function Topo() {
  return (
    <header className={estilos.topo}>
      <div className={estilos.container_topo}>
        <Image className={estilos.img_logo} src={Logo} alt="logotipo"/>
        
        <nav>
          <Link className={estilos.links} href="#secao_produtos">Produtos</Link>
          <Link className={estilos.links} href="#secao_sobre">Sobre</Link>
          <Link className={estilos.links} href="#secao_contato">Contato</Link>
        </nav>
      </div>
    </header>
  );
}