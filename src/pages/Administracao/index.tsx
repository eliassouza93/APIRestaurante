import { useState } from "react"


export default function Administracao() {
    const [estado, setEstado] = useState('')

    function 

    return (
        <div>
            <h1>Seção Administração</h1>

            <form>
                <input onChange={(e) => setEstado (e.target.value)} type="text" />
              
                <button>cadastrar</button>
            </form>


        </div>
    )
}