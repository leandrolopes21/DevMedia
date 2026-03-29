import estilos from "./page.module.css"; // Importa o arquivo CSS Module para estilização local
import { retornaUfs } from "./servicos/ufs"; // Importa a função de serviço que busca os dados das UFs

// Chama a função assíncrona para buscar os dados.
// No Next.js (App Router), isso roda no servidor antes de enviar o HTML pronto para o navegador.
const listaUfs = await retornaUfs();

export default function Home() {
  return (
    // Elemento principal da página, usando a classe definida no CSS Module
    <main className={estilos.main}>
      
      {/* Cabeçalho da aplicação */}
      <header className={estilos.header}>
        App de UFs
      </header>
      <table className={estilos.tabela}>
        <thead>
          <tr>
            <th>ID</th>
            <th>UF</th>
            <th>NOME</th>
          </tr>
        </thead>
        <tbody>
          {
            // Verifica se 'listaUfs' é um array válido (sucesso na API)
            Array.isArray(listaUfs) ? (
              // Se for array, mapeia cada item para criar uma linha na tabela
              listaUfs.map((dadosUF, index) => (
                <tr key={index} >
                  <td>{dadosUF.id}</td>
                  <td>{dadosUF.uf}</td>
                  <td>{dadosUF.nome}</td>
                </tr>
              ))
            ) : (
              // Se não for array, verifica se retornou um objeto de erro específico
              listaUfs.erro ? (
              <tr>
                <td colSpan="3">{listaUfs.erro}</td>
              </tr>
              ) : (
              // Caso contrário, exibe uma mensagem de erro genérica
              <tr>
                <td colSpan="3">Erro ao consumir API</td>
              </tr>
              )
            )
          }
        </tbody>
      </table>
    </main>
  );
}
