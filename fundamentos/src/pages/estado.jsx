import { useState } from "react";
import Layout from "../components/Layout";

export default function Estado(){

    let numero = 3
    
    const state = useState(0)

    let numero = state[0] //1º posição: valor
    let alterarNumero = state[1] //2º posição: função que vai alterar o valor

    //Código enxuto: Destructuring
    const [numero, setNumero] = useState(0)

    function incrementar(){
        //numero += 1 não é o suficiente para alterar o valor na interface gráfica

        alterarNumero(numero + 1)
        
        setNumero(numero + 1)
    }

    return (
        <Layout titulo="Componente com Estado">
            <span>{numero}</span>
            <button onClick={incrementar()}>+1</button>
        </Layout>
    )
}