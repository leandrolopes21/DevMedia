"use server";

import axios from "axios";

export async function retornaRegistroLeads() {
    let leads = [];

    try {
        leads = (
            await axios.get("http://localhost:3001/lista-leads") // Endereço do banco de dados local
        ).data;
    } catch (erro) {
        console.error("Erro ao buscar os dados cadastrados:", erro);
    }

    return leads;
}