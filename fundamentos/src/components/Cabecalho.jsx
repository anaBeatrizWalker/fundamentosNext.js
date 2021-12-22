export default function Cabecalho(props){

    //props é um objeto e permite somente leitura, não pode ser modificada como props.titulo = "exemplo"

    return (
        <header>
            {/*Recebe os dados personalizados passados via propriedade*/}
            <h1>Fundamentos de {props.titulo}</h1>
        </header>
    )
}