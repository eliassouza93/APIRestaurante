import Lista from "./Lista"



export default function PaginaInicial() {
    const Pessoas = [{
        nome: 'Cliente1',
        idade: 39
    }]

    return (
        <div>

            <h1>Restaurante Global</h1>
            <Lista pessoas={Pessoas} />




        </div>
    )
}