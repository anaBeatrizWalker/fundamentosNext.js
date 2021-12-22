import Cabecalho from "../components/Cabecalho";

export default function  Exemplo() {
    return (
        <div>
            {/*As instâncias recebem as propriedades personalizadas*/}
            <Cabecalho titulo="Next.js e React"/>
            <Cabecalho titulo="Aprendendo na prática!"/>
        </div>
        
    )
}