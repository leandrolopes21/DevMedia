import estilos from "./Card.module.css";

export default function Card() {
    return (
        <div className={estilos.card}>
            <h1>Olá Pessoal!!</h1>
            <p>Esse é o primeiro componente a ser criado.</p>
            <p>Componente criado com React.js</p>
        </div>
    );
}