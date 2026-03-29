'use client';
import axios from "axios";
import React, { useState, useEffect} from "react";

const buscaUsuarios = async () => {
  const resposta = await axios.get('https://api.exemplo.com/usuarios');
  return resposta.data;
};

export default function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    const carregar = async () => {
      try {
        const data = await buscaUsuarios();
        setUsuarios(data);
      } catch (error) {
        console.error('Falha na requisição:', error.message);
        setErro('Não foi possível carregar os usuários.');
      }
    };
    carregar();
  }, []);

  if (erro) {
    return <p style={{color: 'red'}}>{erro}</p>;
  }

  return (
    <ul>
      {usuarios.map(usuario => (
        <li key={usuario.id}>{usuario.nome}</li>
      ))}
    </ul>
  );
}