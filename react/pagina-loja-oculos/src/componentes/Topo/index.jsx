import Image from "next/image";
import Logo from "../../../public/logo.png";
import estilos from "./Topo.module.css";
import Link from "next/link";

export default function Topo() {
  return (
    <div className={estilos.container_topo_principal}>
      <header className={estilos.topo}>
        <div className={estilos.logo}>
          <Image className={estilos.img_logo} src={Logo} alt="logotipo"/>
        </div>
        <div className={estilos.links}>
          <Link href="#secao_produtos">Produtos</Link>
          <Link href="#secao_sobre">Sobre</Link>
          <Link href="#secao_contatos">Contato</Link>
        </div>
      </header>
    </div>
  );
}