import Link from "next/link"
import styles from '../styles/Navegador.module.css'

export default function Navegador(){
    return (
        <div>
            <Link href={props.destino}>
                <div className={styles.navegador} style={{
                    //se receber a cor, usa, senão usa dodgerblue
                    backgroundColor: props.cor ?? 'dodgerblue'
                }}>
                    {props.texto}
                </div>
                
            </Link>
        </div>
    )
}