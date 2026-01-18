import "@/styles/globals.css";
import Topo from '@/componentes/Topo';
import Conteudo from '@/componentes/Conteudo';
import Rodape from '@/componentes/Rodape';

export default function App() {
  return (
    <div>
      <Topo />
      <Conteudo />
      <Rodape />
    </div>
  );
}
