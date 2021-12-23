import Layout from '../components/Layout'

//Pegando os dados para formar o componente
export async function getStaticProps(){ //função que sinaliza ao next a geração de um conteúdo estático
    
    const resp = await fetch('http://localhost:3000/api/random')
    const dados = await resp.json()
    setValor(dados.numero)//para pegar só o numero no objeto de dados

    return {
        revalidate: 10, //gera a página estática novamente a cada 10 segundos

        props: {
            numero: dados.numero
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