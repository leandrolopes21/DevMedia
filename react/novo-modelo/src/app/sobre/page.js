import Link from "next/link";
import estilos from "../page.module.css";

export default function Sobre() {
  return (
    <div className={estilos.page}>
      <main className={estilos.main}>
        <h1>Página Sobre</h1>
        <p>Esta é a página sobre do nosso projeto.</p>
        
        <div className={estilos.ctas}>
          <Link href="/" className={estilos.secondary}>
            Voltar para Home
          </Link>
        </div>
      </main>
    </div>
  );
}
