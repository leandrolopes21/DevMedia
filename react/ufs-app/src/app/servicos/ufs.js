import axios from "axios";

export async function retornaUfs() {
    
    try {
        const endpoint = 'http://www.devmedia.com.br/projetos-api/ufs';
        //const endpoint = 'https://mockanpi.com/s/67bf110074963af36440437a/teste-erro?mock_delay=30000';
        const dados = (await axios.get(endpoint, {timeout: 10000})).data;

        return dados;
    } catch (error) {
        return {erro: "Erro ao acessar a API de UFs: " + error.message};
    }
}