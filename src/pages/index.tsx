import Lista from "./Lista"

 


interface INomes {
    nome: string
    idade: number
}

export default function PaginaInicial() {
    const pessoas = [{
        nome: 'Alice',
        idade: 22

    }, {
        nome: 'Joao',
        idade: 30
    }, {
        nome: 'Rita',
        idade: 25
    }, {
        nome: 'Paulo',
        idade: 31
    }]
    return (
        <div>

            <h1>Restaurante Global</h1>
            <Lista pessoas={pessoas} />



        </div>
    )
}