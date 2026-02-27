'use client';
import { useState } from "react";
import estilos from "@/app/componentes/Botao.module.css";

export default function Botao({onClick}) {
    return (
        <div className={estilos.ctas}>
            <button onClick={onClick} className={estilos.botao}>Contar</button>
        </div>
    );
}