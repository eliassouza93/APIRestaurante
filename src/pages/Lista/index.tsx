import Item from "./Item"

interface INomes {
    nome: string
    idade: number
}
export default function Lista({ pessoas }: { pessoas: INomes[] }) {
    return (
        <div>

            {pessoas.map((item, index) => (
                <div>
                    <Item key={index}
                        {...item}
                    />
                </div>
            ))}

        </div>
    )
}