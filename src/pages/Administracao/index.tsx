import { useState } from "react"


export default function Administracao() {
    const [estado, setEstado] = useState('')
    
    const [pegar, setPegar] = useState('')

    function getPegar() {
        setPegar(estado)
    }
    function mostrar(event: any) {
        event?.preventDefault()
        getPegar()
    }
    return (
        <div>
            <h1>Seção Administração</h1>
            <form onSubmit={mostrar}>
                <input onChange={(e) => setEstado(e.target.value)} type="text" placeholder="digíte seu nome" required />
                <input type="text" placeholder="data de nascimento" />
                <button >cadastrar</button>
            </form>
            <h2>Nome:{pegar}</h2>
        </div>
    )
}