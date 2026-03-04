import estilos from '@/app/componentes/rodape/Rodape.module.css';
import Image from 'next/image';
import Logo from './assets/logo.png';
import Imagem1 from '@/app/componentes/rodape/assets/facebook.png';
import Imagem2 from '@/app/componentes/rodape/assets/twitter.png';
import Imagem3 from '@/app/componentes/rodape/assets/linkedin.png';
import Imagem4 from '@/app/componentes/rodape/assets/dribble.png';
import Imagem5 from '@/app/componentes/rodape/assets/behance.png';
import Imagem6 from '@/app/componentes/rodape/assets/google.png';

export default function Rodape(props) {
    return (
        <footer className={props.estado ? estilos.dark_mode_rodape : estilos.light_mode_rodape}>
            <div className={estilos.container_informacoes}>
                <div>
                    <Image src={Logo} alt='Imagem Logo'/>
                    <p className={estilos.paragrafo}>
                        Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias, ferramentas e tecnologias personalizadas.
                    </p>
                </div>
                <div>
                    <Image src={Imagem1} alt='Imagem1' />
                    <Image src={Imagem2} alt='Imagem2' />
                    <Image src={Imagem3} alt='Imagem3' />
                    <Image src={Imagem4} alt='Imagem4' />
                    <Image src={Imagem5} alt='Imagem5' />
                    <Image src={Imagem6} alt='Imagem6' />
                </div>
            </div>
            <div className={estilos.assinatura}>
                <p>Copyright 2026 &copy; - <span>Leandro Lopes</span></p>
            </div>
        </footer>
    );
}