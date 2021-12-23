import Layout from '../components/Layout'

//Pegando os dados para formar o componente
export async function getStaticProps(){ //função que sinaliza ao next a geração de um conteúdo estático

    return {
        revalidate: 10, //gera a página estática novamente a cada 10 segundos

        props: {
            numero: Math.random()
        }
    }
}

export default function Estatico(){
    <Layout title="Conteúdo Estático">
        <div>
            {props.numero}
        </div>
    </Layout>
}