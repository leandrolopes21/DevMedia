import Secao_capa from "./Secao_capa";
import Secao_contatos from "./Secao_contatos";
import Secao_produtos from "./Secao_produtos";
import Secao_sobre from "./Secao_sobre";

export default function Conteudo() {
    return (
        <main>
            <Secao_capa/>
            <Secao_produtos/>
            <Secao_sobre/>
            <Secao_contatos/>
        </main>
    );
}