'use client'; // Código que permite o uso do useState e do onClick

import { useState } from "react"; // useState, ou State Hook, é uma ferramenta do React para criar variáveis que atualizam a interface da aplicação. São chamadas variáveis de estado

import estilos from "./page.module.css";

export default function Home() {
  // Cria uma variável de estado com valor inicial
  // const [variavel, setVariavel] = useState('valor_inicial')
  const [mensagem, setMensagem] = useState('O React é uma biblioteca do Javascript.');

  function alterarMensagem() {
    // Função que atualiza a variável de estado
    // setVariavel(novo_valor)
    setMensagem('O React é um framework utilizado para aplicações web.');
  }

  return (
    <div className={estilos.page}>
      <h1>{mensagem}</h1>
      <button onClick={alterarMensagem}>Alterar Mensagem</button>
    </div>
  );
}
