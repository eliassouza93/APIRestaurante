import axios from "axios"
import { useEffect, useState } from "react"

interface IPratos {
    id: number
    nome: string
    tag: string
    imagem: string
    descricao: string
    restaurante: number
}

export default function Prato() {
    const [prato, setPrato] = useState<IPratos[]>([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/v2/pratos/')
            .then((resposta) => {
                setPrato(resposta.data)
            }).catch((erro) => {
                console.log(erro)
            })
    }, [])
    return (
        <div  >
            <h1>Pratos</h1>
            {prato.map((obj) => (
                <div key={obj.id}>
                    <p> {obj.tag} </p>
                    <li> {obj.nome} </li>
                    <span> {obj.descricao} </span>

                </div>
            ))}




        </div>
    )
}