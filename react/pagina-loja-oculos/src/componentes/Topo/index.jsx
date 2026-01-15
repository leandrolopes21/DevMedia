import Image from "next/image";
import Logo from "../../../public/Logo.png";
import estilos from "./Topo.module.css";

export default function Topo() {
  return (
    <div className={estilos.container_topo_principal}>
      <header className={estilos.topo}>
        <div className={estilos.logo}>
          <Image className={estilos.img_logo} src={Logo} alt="logotipo"/>
        </div>
        <div className={estilos.links}>
          <a>Produtos</a>
          <a>Sobre</a>
          <a>Contato</a>
        </div>
      </header>
    </div>
  );
}