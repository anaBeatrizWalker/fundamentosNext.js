import styles from '../styles/Estiloso.module.css'
import Link from 'next/link'

export default function Estiloso(){
    return (
        <div className={styles.roxo}>
            <h1>Estilo usando CSS Módulos</h1>

            <Link href="/">Home</Link>
        </div>
    )
}