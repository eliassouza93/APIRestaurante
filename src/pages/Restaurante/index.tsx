import axios from "axios"
import { useEffect, useState } from "react"

interface IRestaurante {
    id: number
    nome: string
}

export default function Restaurante() {
    const [restaurante, setRestaurante] = useState<IRestaurante[]>([])
    useEffect(() => {
        axios.get('http://localhost:8000/api/v1/restaurantes/')
            .then((resposta) => {
                setRestaurante(resposta.data.results)
            }).then((error) => {
                console.log(error)
            })

    }, [])

    return (
        <div>
            <h1>Restaurante</h1>

            <div>
                {restaurante.map((data) => (
                    <li key={data.id}>
                        {data.nome}
                    </li>
                ))}
            </div>



        </div>
    )
}