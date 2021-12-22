export default function Jsx(){
    
    //Código de js puro
    const a = 1
    const b = 3
    console.log(a * b)

    const obj = {nome: 'Ana', idade: 20}

    const h3 = <h3>JSX pode ser tratado dentro do JavaScript</h3>

    function  titulo4() {
        return <h4>{"Título de tamanho 4"}</h4>
    }
    
    //Código não puro de js
    return (
        <div>
            <h1>JSX - Conceito Central</h1>

            {/*Interpolando código js*/}
            {a * b}

            <h2>{"muito legal".toUpperCase()}</h2>

            <p>
                {JSON.stringify({nome: 'Ana', idade: 20})}
            </p>

            {h3}

            {titulo4()}
        </div>
    )
}