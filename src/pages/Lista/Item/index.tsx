

export default function Item({ nome, idade }: { nome: string, idade: number }) {
    return (
        <div>

            <div>
                <h3> {nome} </h3>
                <h4> {idade} </h4>
            </div>

        </div>
    )
}