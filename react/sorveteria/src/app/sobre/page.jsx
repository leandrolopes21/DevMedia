import estilos from './sobre.module.css';
import Image from 'next/image';
import Imagem1 from '../sobre/assets/sobre-image.jpg';
import Imagem2 from '../sobre/assets/sorveteria.jpg';

export default function Sobre() {
    return (
        <main className={estilos.main}>
            <section className={estilos.secao_principal}>
                <div>
                    <h1>A GELATERIA</h1>
                </div>
            </section>

            <section className={estilos.secao_secundaria}>
                <div className={estilos.texto}>
                    <h2>Sobre Nós</h2>
                    <span>Nós simplesmente amamos sorvete!</span>
                    <p>
                        Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada sorvete produzido. Fazemos o melhor sorvete para os nossos clientes e gostamos de receber elogios. Estamos operando desde 2009 com as melhores matérias-primas para a produção final do sorvete. Vendemos tanto para varejo como para atacado.
                    </p>
                    <p>
                        Nossos clientes podem comprar os nossos sorvetes e degustar na nossa loja ou levar para sua residência e aproveitar junto com a família. Também vendemos para estabelecimentos e criamos eventos como festa de aniversário, formaturas e eventos empresariais. Para contratar os nossos serviços, basta entrar em contato conosco. Iremos proporcionar o melhor atendimento e os melhores produtos para você fazer a sua festa mais saborosa, com o melhor sorvete da cidade.
                    </p>
                </div>
            </section>

            <section className={estilos.secao_imagens}>
                <div>
                    <Image className={estilos.img} src={Imagem1} alt='Imagem1'/>
                    <Image className={estilos.img} src={Imagem2} alt='Imagem2'/>
                </div>
            </section>
        </main>
    );
}