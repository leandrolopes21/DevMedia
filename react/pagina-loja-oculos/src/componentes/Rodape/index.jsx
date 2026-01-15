import estilos from "./Rodape.module.css";

export default function Rodape() {
    return (
        <footer className={estilos.rodape}>
          <h2>Desenvolvido com React</h2>
          <p>Leandro Lopes 2026</p>
        </footer>
    );
}