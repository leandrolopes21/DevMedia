'use client';
import React from 'react';
import Link from 'next/link';
import estilos from './Topo.module.css';

export default function Topo() {
  return (
    <header className={estilos.topo}>
      <div className={estilos.container}>
        <Link href="/" className={estilos.logo}>
          📚 DevBooks
        </Link>
        <nav className={estilos.navegacao}>
          <Link href="/">Início</Link>
          <Link href="/sobre">Sobre Mim</Link>
        </nav>
      </div>
    </header>
  );
}