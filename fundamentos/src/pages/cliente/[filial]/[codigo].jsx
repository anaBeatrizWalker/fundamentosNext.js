import Layout from "../../../components/Layout";
import { useRouter }from 'next/router'
import { useEffect } from "react";

export default function CodigoDoCliente(){
    const router = useRouter()

    useEffect(()=>{
        console.log(router.query.codigo)//mostra dentro de query o parâmetro codigo com o seu valor passado
    })

    return (
        <Layout titulo="Navegação Dinâmica">
            <div>Código: {router.query.codigo}</div>
            <div>Filial: {router.query.filial}</div>
        </Layout>
    )
}
/*
Os parentêses no nome do arquivo e torna dinâmico, podendo ser acessado por outros valores na url. Exemplos:
/cliente/codigo
/cliente/23
/cliente/blabla

Para acessar o valor: useRouter
*/