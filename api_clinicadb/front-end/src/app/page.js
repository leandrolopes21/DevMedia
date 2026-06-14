import { retornaMedicos } from "./dados/medicos.js";

export default async function Home() {
  const medicos = await retornaMedicos();

  return (
    <div className="container">
      <div className="hero">
        <div className="conteudo-hero">
          <h1 className="titulo-hero">Clínica de Pediatria</h1>
          <p className="subtitulo-hero">
            Cuidando da sua saúde com excelência e dedicação
          </p>

          <div className="info-rapida">
            <div className="cartao-info">
              <span className="material-symbols-outlined">place</span>
              <span>Av. Paulista, 1000 - São Paulo</span>
            </div>
            <div className="cartao-info">
              <span className="material-symbols-outlined">schedule</span>
              <span>Seg-Sex: 8h às 20h</span>
            </div>
            <div className="cartao-info">
              <span className="material-symbols-outlined">call</span>
              <span>(11) 3000-0000</span>
            </div>
          </div>
        </div>
      </div>

      <main className="principal">
        <h2 className="titulo-principal">Nossa Equipe Médica</h2>

        <div className="container-medicos">
          {medicos.map((medico) => (
            <div key={medico.id} className="cartao-medico">
              <div className="conteudo-medico">
                <div className="container-avatar">
                  <span className="material-symbols-outlined">person</span>
                </div>
                <h3 className="nome-medico">{medico.nome}</h3>
                <p className="descricao-medico">{medico.descricao}</p>
                <div className="info-contato">
                  <div className="item-contato">
                    <span className="material-symbols-outlined">call</span>
                    <span>{medico.telefone}</span>
                  </div>
                  <div className="item-contato">
                    <span className="material-symbols-outlined">email</span>
                    <span>{medico.email}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Rodapé */}
      <footer className="rodape">
        <div className="conteudo-rodape">
          <h3 className="titulo-rodape">Clínica de Pediatria</h3>
          <p className="subtitulo-rodape">Cuidando da sua saúde desde 1995</p>
          <div className="links-sociais">
            <a href="tel:1130000000" className="link-social">
              <span className="material-symbols-outlined">call</span>
            </a>
            <a href="mailto:contato@clinica.com" className="link-social">
              <span className="material-symbols-outlined">email</span>
            </a>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="link-social"
            >
              <span className="material-symbols-outlined">place</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
