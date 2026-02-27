import Image from "next/image";
import Link from "next/link";
import estilos from "./page.module.css";

export default function Home() {
  return (
    <div className={estilos.page}>
      <main className={estilos.main}>
        <Image
          className={estilos.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className={estilos.intro}>
          <h1>Vamos aprender React da maneira correta.</h1>
          <p>
            Procurando um ponto de partida ou mais instruções? Acesse{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Templates
            </a>{" "}
            ou {" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className={estilos.ctas}>
          <a
            className={estilos.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={estilos.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Implantar Agora
          </a>
          <a
            className={estilos.secondary}
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentação
          </a>
          <a
            className={estilos.secondary}
            href="https://pt-br.react.dev/blog/2023/03/16/introducing-react-dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <Link className={estilos.secondary} href="/Teste" target="_blank">Teste</Link>
          <Link className={estilos.secondary} href="/sobre" target="_blank">Sobre</Link>
        </div>
      </main>
    </div>
  );
}
