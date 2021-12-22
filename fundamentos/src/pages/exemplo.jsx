import Cabecalho from "../components/Cabecalho";

export default function  Exemplo() {
    return (
        //Para usar a instância mais de uma vez dentro da função é preciso envolvê-las em fragmento (<></>) ou uma div
        <div>
            {/*Uso de componente: instância do comp como um elemento jsx*/}
            <Cabecalho/>
            <Cabecalho/>
        </div>
        
    )
}