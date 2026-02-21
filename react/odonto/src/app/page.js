import Image from "next/image";
import estilos from "./page.module.css";

import Dente from "../../public/assets/dente.png";
import Aparelho from "../../public/assets/aparelho.png";
import Cliente01 from "../../public/assets/cliente01.png";
import Cliente02 from "../../public/assets/cliente02.png";
import Cliente03 from "../../public/assets/cliente03.png";
import Dentista01 from "../../public/assets/dentista01.png";
import Dentista02 from "../../public/assets/dentista02.png";

import CardDepoimento from "./componentes/CardDepoimento/index";
import MolduraInformacoes from "./componentes/MolduraInformacoes/index";

export default function Home() {
  return (
    <div className={estilos.page}>

      <header className={estilos.topo}>
        <div className={estilos.container_logo}>
          <Image src={Dente} alt="Dente"/>
          <p>Dentes Saudáveis</p>
        </div>
      </header>

      <section className={estilos.secao_apresentacao}>
        <div className={estilos.container_texto_apresentacao}>
          <h1>OS MELHORES <span>APARELHOS DENTÁRIOS</span></h1>
          <p>Confira abaixo todas as especialidades odontológicas que temos à sua disposição!</p>
        </div>

        <ul className={estilos.lista_servicos}>
          <li>
            <Image src={Dente} alt="Dente" />
            <p>Pré_avaliação</p>
          </li>
          <li>
            <Image src={Dente} alt="Dente" />
            <p>Aparelhos Dentários</p>
          </li>
          <li>
            <Image src={Dente} alt="Dente" />
            <p>Raio-X digital</p>
          </li>
          <li>
            <Image src={Dente} alt="Dente" />
            <p>Clareamento dental</p>
          </li>
        </ul>
      </section>

      <section className={estilos.secao_beneficios}>
        <div>
          <h2 className={estilos.subtitulo}>
            PORQUE USAR <span>APARELHO?</span>
          </h2>
          <figure className={estilos.container_img_aparelho}>
            <Image src={Aparelho} alt="Aparelho" />
          </figure>
        </div>

        <ul className={estilos.lista_beneficios}>
          <li>
            <h3>Alinhar os dentes</h3>
            <p>
              Dentes desalinhados causam problemas nos dentes e podem afetar a
              digestão dos alimentos e a respiração.
            </p>
          </li>
          <li>
            <h3>Melhorar a dicção e a higiene dentária</h3>
            <p>
              Muitas pessoas não conseguem nem usar fio dental devido à posição
              da sua dentição. Contudo, a correção possibilita o cuidado com a
              saúde bucal de forma bem mais ampla.
            </p>
          </li>
          <li>
            <h3>Corrigir espaço entre os dentes</h3>
            <p>
              Uma dentição desalinhada e com espaços significativos incomodam
              muitas pessoas. Usar aparelho nos dentes é uma das formas mais
              eficientes para que esses problemas possam ser corrigidos.
            </p>
          </li>
        </ul>
      </section>

      <section className={estilos.secao_depoimentos}>
        <h2 className={estilos.subtitulo}>
          VEJA O QUE NOSSOS CLIENTES ESTÃO FALANDO...
        </h2>

        <div className={estilos.container_depoimentos}>
          <CardDepoimento
            imagem={Cliente01}
            nome={"Alberto"}
            descricao={"Por dois anos, eu fiz um tratamento com o Dentes Saudáveis, que me atendeu com profissionalismo e cuidado."}
          />
          <CardDepoimento
            imagem={Cliente02}
            nome={"Eliana"}
            descricao={"Por dois anos, eu fiz um tratamento com o Dentes Saudáveis, que me atendeu com profissionalismo e cuidado."}
          />
          <CardDepoimento
            imagem={Cliente03}
            nome={"Carla"}
            descricao={"Por dois anos, eu fiz um tratamento com o Dentes Saudáveis, que me atendeu com profissionalismo e cuidado."}
          />
        </div>
      </section>

      <section className={estilos.secao_informacoes}>
        <div className={estilos.container_informacoes}>
          <MolduraInformacoes>
            <ul className={estilos.lista_horarios}>
              <li>Segunda - 09:00 às 18:00</li>
              <li>Terça - 09:00 às 18:00</li>
              <li>Quarta - 09:00 às 18:00</li>
              <li>Quinta - 09:00 às 18:00</li>
              <li>Sexta - 09:00 às 17:00</li>
              <li>Sábado - 09:00 às 12:00</li>
            </ul>
          </MolduraInformacoes>
          <MolduraInformacoes>
            <div className={estilos.card}>
              <figure>
                <Image
                  className={estilos.img_aparelho}
                  src={Dentista01}
                  alt="Dr. Ana"
                  title="Dr. Ana"
                />
              </figure>
              <div>
                <p>Dra. Ana - Ortodontista</p>
                <p>Segundas e sextas</p>
              </div>
            </div>
            <div className={estilos.card}>
              <figure>
                <Image
                  className={estilos.img_aparelho}
                  src={Dentista02}
                  alt="Dr. Carlos"
                  title="Dr. Carlos"
                />
              </figure>
              <div>
                <p>Dr. Carlos - Endodontia</p>
                <p>Terças e quartas</p>
              </div>
            </div>
          </MolduraInformacoes>
          <MolduraInformacoes>
            <p>Ligue para agendar uma consulta:</p>
            <p>(21) 3699 - 9999</p>
            <p>(21) 97788 - 5566</p>
          </MolduraInformacoes>
        </div>
      </section>

      <section className={estilos.secao_localizacao}>
        <div>
          <h2 className={estilos.subtitulo}>
            ONDE ESTAMOS LOCALIZADOS?
          </h2>
          <p>R. Eugênio Flôr, 790 - Abranches, Curitiba - PR, 82130-290</p>
        </div>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4651.485289408599!2d-49.28264352358101!3d-25.37855933086027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce6d415fa03c7%3A0xcca9a4268b37b3c7!2sR.%20Eug%C3%AAnio%20Fl%C3%B4r%2C%20790%20-%20Abranches%2C%20Curitiba%20-%20PR%2C%2082130-290!5e1!3m2!1spt-BR!2sbr!4v1771686356334!5m2!1spt-BR!2sbr" width="100%" height="450">
        </iframe>
      </section>

      <footer className={estilos.rodape}>
        <div>&copy; Copyright 2026 | Leandro Lopes</div>
      </footer>
    </div>
  );
}
