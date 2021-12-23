//Acessando um objeto de informações do backend

import { useState } from 'react'
import Layout from '../components/Layout'

export default function Integracao(){

    const[codigo, setCodigo] = useState(1)
    const[cliente, setCliente] = useState({})

    //Tratando o método como assíncrono
    async function obterCliente() {
        //Somente quando finalizar a chamada (await)
        const resp = await fetch(`http://localhost:3000/api/clientes/${codigo}`)

        //Coleta os dados
        const dados = await resp.json()

        //Somente quando os dados estiverem prontos seta o cliente
        setCliente(dados)     
           
        
        //fetch(`http://localhost:3000/api/clientes/${codigo}`)
        //.then(resp => resp.json())
        //Quando fizer a req dos dados, altera o estado do componente
        //.then(dados => setCliente(dados))
    }

    return (
        <Layout>
            <div>
                <input type="number" placeholder='Código do cliente' 
                    value={codigo}
                    onChange={e => setCodigo(e.target.value)}/>
                    
                <button onClick={obterCliente}>Obter Cliente</button>
            </div>
            <ul>
                <li>Código: {cliente.id}</li>
                <li>Nome: {cliente.nome}</li>
                <li>E-mail: {cliente.email}</li>
            </ul>
        </Layout>
    )
}