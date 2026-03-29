import axios from 'axios';

// Função assíncrona exportada: permite usar 'await' dentro dela e ser importada em outros arquivos.
export async function buscaPosts() {
    // O bloco try envolve o código que pode gerar um erro (ex: falha na rede).
    try {
        // O 'await' pausa a execução aqui até o axios receber a resposta do servidor.
        const resposta = await axios.get('https://api.exemplo.com/posts');
        // Se a requisição funcionar, retornamos apenas os dados úteis (resposta.data).
        return resposta.data;
    } catch {
        // Aqui usamos o 'Optional Catch Binding' (catch sem parênteses).
        // Isso indica que ignoramos propositalmente o motivo do erro (a variável 'error').
        // Útil quando a única ação necessária é retornar um valor padrão (como null).
        return null;
    }
}