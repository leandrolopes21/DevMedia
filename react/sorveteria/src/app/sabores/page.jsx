import estilos from './sabores.module.css';
import Image from 'next/image';
import SaborOreo from './assets/sabor-oreo.png';
import SaborPistache from './assets/sabor-pistache.png';
import CookiesAvela from './assets/sabor-cookies-avela.png';
import SaborKiwi from './assets/sorbet-kiwi.png';
import SaborMorango from './assets/sorbet-morango.png';
import SaborLimao from './assets/sorbet-limao.png';

export default function Sabores() {
    return (
        <main className={estilos.main}>
            <section className={estilos.secao_principal}>
                <div className={estilos.titulo_banner_sabores}>
                    <h1>NOSSOS SABORES</h1>
                </div>
            </section>

            <section className={estilos.secao_cards}>
                <h2>SABORES DE SORVETE</h2>
                <div className={estilos.container_produtos_card}>
                    <div className={estilos.card}>
                        <Image className={estilos.img_card} src={SaborOreo} alt='Oreo'/>
                        <h3>Sorvete de Oreo</h3>
                        <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
                    </div>
                    <div className={estilos.card}>
                        <Image className={estilos.img_card} src={SaborPistache} alt='Pistache'/>
                        <h3>Sorvete Pistache</h3>
                        <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
                    </div>
                    <div className={estilos.card}>
                        <Image className={estilos.img_card} src={CookiesAvela} alt='Cookies & Avelã'/>
                        <h3>Sorvete Cookies & Avelã</h3>
                        <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
                    </div>
                    <div className={estilos.card}>
                        <Image className={estilos.img_card} src={SaborKiwi} alt='Kiwi'/>
                        <h3>Sorvete de Kiwi</h3>
                        <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
                    </div>
                    <div className={estilos.card}>
                        <Image className={estilos.img_card} src={SaborMorango} alt='Morango'/>
                        <h3>Sorvete de Morango</h3>
                        <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
                    </div>
                    <div className={estilos.card}>
                        <Image className={estilos.img_card} src={SaborLimao} alt='Limão Siciliano'/>
                        <h3>Sorvete de Limão Siciliano</h3>
                        <p>O incrivel sorvete gourmet de limão siciliano vai te encantar.</p>
                    </div>
                </div>
            </section>
        </main>
    );
}