'use client';

import { useEffect, useState } from "react";
import styles from "./page_login.module.css";
import axios from "axios";

export default function Home() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      location.href = '/';
    }
  }, []);

  async function login() {
    try {
      const resposta = await axios.post('http://localhost:3001/login', { usuario, senha });
      localStorage.setItem('token', resposta.data.token);
      location.href = '/';
    } catch (erro) {
      alert("Usuário ou senha incorretos!");
    }
  }

  return (
    <div className={styles.page}>
        <main className={styles.main}>
            <div className={styles.card}>
                <h1 className={styles.title}>Dashboard - Login</h1>
                <form>
                    <div className={styles.formGroup}>
                        <input 
                            type="text" 
                            className={styles.inputField}
                            placeholder="Usuário" 
                            onChange={(e) => setUsuario(e.target.value)} 
                            value={usuario} 
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <input 
                            type="password" 
                                className={styles.inputField}
                                placeholder="Senha" 
                                onChange={(e) => setSenha(e.target.value)} 
                                value={senha} 
                        />
                    </div>
                    <button 
                        type="button" 
                        className={styles.btnLogin} 
                        onClick={login}
                    >
                        Entrar
                    </button>
                </form>
            </div>
        </main>
    </div>
  );
}