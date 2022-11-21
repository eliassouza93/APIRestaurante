import { useState } from "react"
import style from './administracao.module.scss'

export default function Administracao() {
    const [estado, setEstado] = useState('')
    const [nasci, setNasci] = useState('')
    const [estado1, setEstado1] = useState('')
    const [pegar, setPegar] = useState('')

    function getPegar() {
        setPegar(estado)
        setEstado1(nasci)

    }
    function mostrar(event: any) {
        event?.preventDefault()
        getPegar()


    }
    return (
        <div className={style.module}>
            <h1>Seção Administração</h1>
            <form onSubmit={mostrar}>
                <input onChange={(e) => setEstado(e.target.value)} type="text" placeholder="digíte seu nome" required />
                <input onChange={(e) => setNasci(e.target.value)} type="text" placeholder="data de nascimento 00/00/0000" required />

                <button >cadastrar</button>
            </form>
            <h2>Nome:{pegar}</h2>
            <h2>Nascimento:{estado1}</h2>
        </div>
    )
}