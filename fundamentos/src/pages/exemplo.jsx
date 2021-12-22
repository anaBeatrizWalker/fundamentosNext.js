import Cabecalho from "../components/Cabecalho";
import Layout from "../components/Layout";

export default function  Exemplo() {
    return (
        <Layout title="Usando propriedades de componentes">
            {/*As instâncias recebem as propriedades personalizadas*/}
            <Cabecalho titulo="Next.js e React"/>
            <Cabecalho titulo="Aprendendo na prática!"/>
        </Layout>
    )
}