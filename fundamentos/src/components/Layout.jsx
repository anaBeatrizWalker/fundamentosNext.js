import styles from '../styles/Layout.module.css'
import Link from 'next/link'

export default function Layout(props){
    return (
        <div className={styles.layout}>
            <div className={styles.cabecalho}>
                <h1>{props.titulo ?? "Título provisório"}</h1>
                <Link href="/">Home</Link>
            </div>

            <div className={styles.conteudo}>
                {/*Renderiza todos os filhos dentro da instância de Layout*/}
                {props.children}
            </div>
        </div>
    )
}