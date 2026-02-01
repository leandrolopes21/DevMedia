import estilos from './Rodape.module.css';
import Logo from '../../../public/logo.png';
import Image from 'next/image';

export default function Rodape() {
    return (
        <footer className={estilos.container_rodape}>
            <div className={estilos.container_div}>
                <Image className={estilos.img} src={Logo} alt='Logo'/>
                <div className={estilos.container_card}>
                    <h3>ENDEREÇO</h3>
                    <p>R. Francisco Alves Mendes nº 560 <br/> Campo Largo - PR</p>
                </div>
                <div className={estilos.container_card}>
                    <h3>CONTATO</h3>
                    <p>sorvete@meusite.com.br</p>
                    <p>Tel: (41)99999-7777</p>
                </div>
                <div className={estilos.container_card}>
                    <h3>HORÁRIOS</h3>
                    <p>ABERTO TODOS OS DIAS</p>
                    <p>10:00 - 22:00</p>
                </div>

                <p>Gelateria. Desenvolvido por Leandro Lopes</p>
            </div>
        </footer>
    )
}