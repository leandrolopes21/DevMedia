"use server";

import axios from "axios";

export async function retornaMedicos() {
    let medicos = [];

    try {
        medicos = (
            // await axios.get("https://clinica-backend-3kn6.onrender.com/medicos") // Endereço do endpoint hospedado pela DevMedia
            await axios.get("http://localhost:8000/medicos") // Endereço do meu banco de dados local
        ).data;
    } catch (erro) {
        console.error("Erro ao buscar os médicos:", erro);
    }

    return medicos;
}